import jwt from "jsonwebtoken";

const getJwtSecret = () => {
  const secret = process.env.JWT_SECRET;

  if (!secret) {
    throw new Error("JWT_SECRET is not configured");
  }

  return secret;
};

export const generateToken = (user) => {
  const payload = {
    id: user._id.toString(),
    email: user.email,
  };

  return jwt.sign(payload, getJwtSecret(), {
    expiresIn: process.env.EXPIRES_IN || "7d",
  });
};

export const verifyToken = (token) => {
  return jwt.verify(token, getJwtSecret());
};

