const mongoose = require('mongoose');
const AuthorScehema = new mongoose.Schema({
  name: { type: String },
  age: { type: Number },
});
module.exports = mongoose.model('Author', AuthorScehema);
