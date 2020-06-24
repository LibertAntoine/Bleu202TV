const jwt = require('jsonwebtoken');
const randomInt = require('random-int');
const User = require('../models/User');

const adj1 = ["Gentil", "Malicieux", "Tranquille", "Virulant", "Timide", "Paresseux", "Calme", "Tendre", "Paisible", "Charismatique"];
const virus = ["Coronavirus", "Choleravirus", "Betaretrovirus", "Fabavirus", "Hantasvirus", "Geminivirus", "Rhinovirus", "Cucumovirus", "Astrovirus", "Myxovirus"];
const adj2 = ["Drole", "Glouton", "Silencieux", "Bavard", "Reveur", "Allergique", "Sensible", "Ronchon", "Rieur", "Altruiste"];

exports.signup = async (req, res, next) => {
    let user = true, name;
    while (user) {
      name = adj1[randomInt(0, 9)] + " " + virus[randomInt(0, 9)] + " "+ adj2[randomInt(0, 9)]
      user = await User.findOne({ uniqueName: name })
    }
    const newUser = new User({ ...req.body.user, uniqueName: name })
    await newUser.save()
    res.status(201).json({
      message: 'User create !',
      uniqueName: newUser.uniqueName,
      token : jwt.sign(
        { uniquename: newUser.uniqueName },
        process.env.SECRET_KEY,
        { expiresIn: '48h' }
      )
  });
}

exports.login = async (req, res, next) => {
    const user = await User.findOne({ uniqueName: req.body.uniqueName })
    if (!user) {
        res.status(201).json({ error: 'User don\'t find !' }) 
    } else {
        res.status(200).json({
          user: user,
          token: jwt.sign(
            { uniquename: user.uniqueName },
            process.env.SECRET_KEY,
            { expiresIn: '48h' }
          )
        });
      }
  };

  exports.auth = async (req, res, next) => {
    res.status(200).json({user: req.user});
  };