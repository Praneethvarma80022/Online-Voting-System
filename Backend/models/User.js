const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    match: [
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      'Please enter a valid email address',
    ],
  },
  voterId: {
    type: String,
    required: [true, 'Voter ID is required'],
    unique: true,
    uppercase: true,
    match: [/^([A-Z]{3}\d{7})$/, 'Invalid voter ID format'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  hasVoted: {
    type: Boolean,
    default: false
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  mfaCode: {
    type: String,
    private: true,
  },
  mfaCodeExpires: {
    type: Date,
    private: true,
  },
  profileImage: {
    type: String,
    default: '' 
  }
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const User = mongoose.model('User', userSchema);
module.exports = User;
