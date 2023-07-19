
function admin(req, res, next) {
  // Checks if user is an admin
  if(!req.user.isAdmin) {
    return res.status(403).send({errors: [{ msg:'Access Denied'}]});
    // 401 = Unaurthorised - No valid token
    // 403 = Forbidden - Valid token, insufficient privileges
  }
  next();
};

module.exports = admin;