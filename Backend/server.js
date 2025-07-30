require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const User = require('./models/User');
const Poll = require('./models/poll');

if (!process.env.MONGO_URI || !process.env.JWT_SECRET || !process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.error("FATAL ERROR: MONGO_URI, JWT_SECRET, EMAIL_USER, and EMAIL_PASS must be defined in the .env file.");
  process.exit(1);
}

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected successfully!"))
  .catch(err => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function sendMfaEmail(toEmail, code) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: toEmail,
    subject: 'Your Voting System Verification Code',
    html: `
        <p>Hello,</p>
        <p>Your verification code is:</p>
        <h2 style="text-align: center; letter-spacing: 5px; font-size: 24px;">${code}</h2>
        <p>This code will expire in 10 minutes.</p>
        <p>If you did not request this, please ignore this email.</p>
    `,
  };
  try {
    await transporter.sendMail(mailOptions);
    console.log(`MFA email sent to ${toEmail}`);
  } catch (error) {
    console.error(`Error sending MFA email to ${toEmail}:`, error);
    throw new Error('Could not send verification email.');
  }
}

const authMiddleware = (req, res, next) => {
  const token = req.header('x-auth-token');
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (e) {
    res.status(400).json({ message: 'Token is not valid' });
  }
};

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.post('/api/signup', async (req, res) => {
  const { name, email, voterId, password } = req.body;

  if (!name || !email || !voterId || !password) {
    return res.status(400).json({ message: 'Please fill out all fields.' });
  }

  try {
    const existingUser = await User.findOne({ $or: [{ email: email.toLowerCase() }, { voterId: voterId.toUpperCase() }] });
    if (existingUser) {
      if (existingUser.email === email.toLowerCase()) {
        return res
          .status(409)
          .json({ message: 'A user with this email already exists.' });
      }
      if (existingUser.voterId === voterId.toUpperCase()) {
        return res
          .status(409)
          .json({ message: 'A user with this Voter ID already exists.' });
      }
    }

    const newUser = new User({
      name,
      email,
      voterId,
      password,
    });

    await newUser.save();

    res
      .status(201)
      .json({ message: 'User created successfully! Please log in.' });

  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: error.message });
    }
    console.error('Signup error:', error);
    res.status(500).json({ message: 'Server error during signup. Please try again later.' });
  }
});

app.post('/api/login-request', async (req, res) => {
  const { voterId, password } = req.body;

  if (!voterId || !password) {
    return res.status(400).json({ message: 'Please provide voter ID and password.' });
  }

  try {
    const user = await User.findOne({ voterId: voterId.toUpperCase() });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials.' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials.' });
    }

    const mfaCode = crypto.randomInt(100000, 999999).toString();
    const mfaCodeExpires = new Date(Date.now() + 10 * 60 * 1000); 

    user.mfaCode = mfaCode;
    user.mfaCodeExpires = mfaCodeExpires;
    await user.save();

    await sendMfaEmail(user.email, mfaCode);
    
    res.status(200).json({ message: 'A verification code has been sent to your registered email.' });

  } catch (error) {
    console.error('Login request error:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

app.post('/api/login-verify', async (req, res) => {
  const { voterId, mfaCode } = req.body;

  if (!voterId || !mfaCode) {
    return res.status(400).json({ message: 'Please provide voter ID and authentication code.' });
  }

  try {
    const user = await User.findOne({ 
        voterId: voterId.toUpperCase(),
        mfaCode: mfaCode,
        mfaCodeExpires: { $gt: new Date() }
    });

    if (!user) {
        return res.status(401).json({ message: 'Invalid or expired authentication code.' });
    }
    
    user.mfaCode = undefined;
    user.mfaCodeExpires = undefined;
    await user.save();

    const userRole = user.voterId === 'ABC1234567' ? 'admin' : 'user';

    const payload = {
      user: {
        id: user.id,
        role: userRole
      }
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '24h' },
      (err, token) => {
        if (err) throw err;
        
        res.status(200).json({ 
            token,
            user: {
                name: user.name,
                role: userRole,
                hasVoted: user.hasVoted
            }
        });
      }
    );

  } catch (error) {
    console.error('Login verification error:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});


app.get('/api/poll', async (req, res) => {
  try {
    const poll = await Poll.findOne();
    if (!poll) {
      return res.status(404).json({ message: 'No poll found.' });
    }
    res.json(poll);
  } catch (error) {
    console.error('Error fetching poll:', error);
    res.status(500).json({ message: 'Server error.' });
  }
});

app.post('/api/vote', authMiddleware, async (req, res) => {
  const { optionId } = req.body;
  const userId = req.user.id;

  try {
    const user = await User.findById(userId);
    if (!user) {
        return res.status(404).json({ message: 'User not found.' });
    }
    if (user.hasVoted) {
      return res.status(400).json({ message: 'You have already voted.' });
    }

    const poll = await Poll.findOneAndUpdate(
      { "options._id": optionId },
      { $inc: { "options.$.votes": 1 } },
      { new: true }
    );

    if (!poll) {
      return res.status(404).json({ message: 'Poll or option not found.' });
    }

    user.hasVoted = true;
    await user.save();

    res.json({ message: 'Vote successfully recorded!', poll });

  } catch (error) {
    console.error('Error processing vote:', error);
    res.status(500).json({ message: 'Server error.' });
  }
});

app.get('/api/create-initial-poll', async (req, res) => {
    try {
        await Poll.deleteMany({});
        const initialPoll = new Poll({
            title: "AP ELECTIONS",
            options: [
                { name: "Telugu Desam Party", image: "/image/TDP.png", description: "A regional political party...", votes: 0 },
                { name: "Jana Sena Party", image: "/image/JSP.png", description: "Founded by actor Pawan Kalyan...", votes: 0 },
                { name: "YSRCP", image: "/image/YSRCP.png", description: "A regional party in Andhra Pradesh...", votes: 0 },
                { name: "CONGRESS PARTY", image: "/image/CONGRESS.png", description: "One of India's oldest political parties...", votes: 0 },
            ]
        });
        await initialPoll.save();
        res.send("Initial poll created successfully!");
    } catch (error) {
        res.status(500).send("Error creating initial poll: " + error.message);
    }
});

app.get('/api/reset-all-for-testing', async (req, res) => {
    try {
        await User.updateMany({}, { $set: { hasVoted: false } });

        await Poll.deleteMany({});
        const initialPoll = new Poll({
            title: "AP ELECTIONS",
            options: [
                { name: "Telugu Desam Party", image: "/image/TDP.png", description: "A regional political party...", votes: 0 },
                { name: "Jana Sena Party", image: "/image/JSP.png", description: "Founded by actor Pawan Kalyan...", votes: 0 },
                { name: "YSRCP", image: "/image/YSRCP.png", description: "A regional party in Andhra Pradesh...", votes: 0 },
                { name: "CONGRESS PARTY", image: "/image/CONGRESS.png", description: "One of India's oldest political parties...", votes: 0 },
            ]
        });
        await initialPoll.save();
        
        res.send("All users' voting status and poll counts have been reset successfully!");
    } catch (error) {
        res.status(500).send("Error resetting data: " + error.message);
    }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));