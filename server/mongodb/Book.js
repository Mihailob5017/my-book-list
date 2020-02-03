const mongoose = require('mongoose');
const BookSchema = new mongoose.Schema({
  name: { type: String },
  genre: { type: String },
  authorId: { type: String }
});

module.exports = new mongoose.model('Book', BookSchema);
