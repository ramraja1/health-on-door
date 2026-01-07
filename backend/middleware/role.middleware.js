export const allowRoles = (...allowedRoles) => {
  return (req, res, next) => {
    // req.user is set by auth middleware (JWT)
    if (!req.user || !allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        message: "Access denied: insufficient permissions",
      });
    }

    next();
  };
};
