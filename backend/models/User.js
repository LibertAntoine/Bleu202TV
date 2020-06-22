const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  uniqueName: { type: String, required: true, unique:true },
  pseudo: { type: String, required: true },
  favoriteCharacter: { type: String, required: true },
  favoriteActor: { type: String, required: true },
  favoriteDrink: { type: Number, required: true },
  favoriteCake: { type: Number, required: true },
  astroSigne: { type: Number, required: true },
});

module.exports = mongoose.model('User', userSchema);