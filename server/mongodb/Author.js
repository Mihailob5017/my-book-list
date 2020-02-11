const mongoose = require('mongoose');
const AuthorScehema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  birthYear: { type: Number },
  isAlive: { type: Boolean },
  deathYear: { type: Number },
  favorite: { type: Boolean },
  authorGenre: { type: String }
});
module.exports = mongoose.model('Author', AuthorScehema);
