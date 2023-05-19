const CustomErr = require("../errors");
const { isTokenValid } = require("../utils");

const authenticateUser = async (req, res, next) => {
  const token = req.signedCookies.token;

  if (!token) {
    throw new CustomErr.UnauthenticatedError("Authentication Invalid");
  }

  try {
    const { name, userId, role } = isTokenValid({ token });
    req.user = { name, userId, role };
    next();
  } catch (error) {
    throw new CustomErr.UnauthenticatedError("Authentication Invalid");
  }
};

const authorizePermissions = (req, res, next) => {
  if (req.user.role !== "admin") {
    throw new CustomErr.UnauthorizedError("Unauthorized to access this route");
  }
  next();
};

module.exports = {
  authenticateUser,
  authorizePermissions,
};
