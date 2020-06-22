const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    if (!decodedToken.uniquename) { throw 'Invalid token';}
    const user = await User.findOne({ uniqueName: decodedToken.uniquename})
    if (!user) {
      throw 'Invalid uniqueName';
    } else {
      req.user = user
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};