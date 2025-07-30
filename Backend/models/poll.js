const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String },
  description: { type: String },
  votes: { type: Number, default: 0 }
});

const pollSchema = new mongoose.Schema({
  title: { type: String, required: true },
  options: [optionSchema]
});

const Poll = mongoose.model('Poll', pollSchema);
module.exports = Poll;
