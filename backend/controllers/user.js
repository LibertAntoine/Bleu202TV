const jwt = require('jsonwebtoken');

const User = require('../models/User');

exports.signup = async (req, res, next) => {
    const user = new User({ ...req.body.user });
    await user.save();
    res.status(201).json({message: 'User create !'});
}

exports.login = async (req, res, next) => {
    const user = await User.findOne({ name: req.body.name })
    (!user) ? 
        res.status(401).json({ error: 'User don\'t find !' }) :
        res.status(200).json(user);
    /*
            res.status(200).json({
              userId: user._id,
              token: jwt.sign(
                { userId: user._id },
                process.env.SECRET_KEY,
                { expiresIn: '24h' }
              )
            });*/
  };