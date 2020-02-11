const mongoose = require('mongoose');
const BookSchema = new mongoose.Schema({
  name: { type: String, required: true },
  genre: { type: String, required: true },
  rating: { type: Number, min: 1, max: 10 },
  about: { type: String, maxlength: 256 },
  authorId: { type: String, required: true }
});

module.exports = new mongoose.model('Book', BookSchema);
