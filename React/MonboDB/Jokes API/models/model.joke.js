const mongoose = require("mongoose");

const jokeSchema = new mongoose.Schema({
  setup: {
    type: String,
    required: [true, "{PATH} is required"],
  },
  punchline: {
    type: String,
    required: [true, "{PATH} is required"],
  },
},{timestamps: true});

const Joke = mongoose.model("Joke", jokeSchema);

module.exports = Joke;
