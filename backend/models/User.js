const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  uniqueName: { type: String, required: true, unique:true },
  pseudo: { type: String, required: true },
  favoriteCharacter: { type: Number, required: true },
  favoriteDrink: { type: Number, required: true },
  favoriteCake: { type: Number, required: true },
  astroSigne: { type: Number, required: true },
  genre: { type: Number },
  friend: { type: Number },
  masque: { type: Number },
  selfie: { type: Number },
  cake: { type: Number },
  drink: { type: Number },
  door: { type: Number },
  back: { type: Number }
});

module.exports = mongoose.model('User', userSchema);