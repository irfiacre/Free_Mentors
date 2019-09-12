
module.exports = (req, res, next) => {
  if (!req.userData.is_mentor) {
    return res.status(403).json({
      status: 403,
      error: 'Forbidden: Only Mentors can perform this operation',
    });
  }
  next();
};
