const mongoose = require('mongoose');

const romanSchema = mongoose.Schema({
  state : { type: Number, required: true, unique: true},
  nbPhoto : { type: Number, required: true },
  profil : { type: Number, required: true },
  photos: { type: Array, required: true },
  audio: { type: Number, required: true },
  time: { type: Number, required: true },
  next: { type: Array, required: true }
});

module.exports = mongoose.model('roman', romanSchema);