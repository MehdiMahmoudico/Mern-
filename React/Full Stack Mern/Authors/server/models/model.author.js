const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    name: { type: String, required: [true, '{PATH} required'] },
},{timestamps: true});

const author = mongoose.model('author',authorSchema);

module.exports = author;
