const jwt = require('jsonwebtoken');
const config = require('../config/config');

module.exports = function (req, res, next) {
  // This gets token from header
  const token = req.header('x-auth-token')

  // Check if we have a valid token
  if(!token) {
    return res.status(401).json({errors: [{msg: 'No token supplied, authorisation denied'}]});
  };

  // Verify token
  try{
    const decoded = jwt.verify(token, config.authentication.jwtSecret);
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ errors: [{msg: 'Token is not valid'}]});
  }
}