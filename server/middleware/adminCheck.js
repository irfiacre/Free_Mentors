
module.exports = (req, res, next) => {
  if (!req.userData.is_admin) {
    return res.status(403).json({
      status: 403,
      error: 'Forbidden: Only Admins can perform this operation',
    });
  }
  next();
};
