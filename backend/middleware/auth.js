const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports = async (req, res, next) => {
  try {
    const decodedToken = jwt.verify(req.headers.authorization.split(' ')[1], process.env.SECRET_KEY);
    if (!decodedToken.uniquename) { throw 'Invalid token';}
    const user = await User.findOne({ uniqueName: decodedToken.uniquename})
    if (!user) {
      throw 'Invalid uniqueName';
    } else {
      req.user = user
      next();
    }
  } catch {
    res.status(203).json({
      error: new Error('Invalid request!')
    });
  }
};