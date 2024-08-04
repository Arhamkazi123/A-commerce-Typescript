import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    path: "/", // Ensures the cookie is accessible across the entire site
    maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
    httpOnly: true, // Prevents client-side access to the cookie
    sameSite: "lax", // Adjust as needed for cross-site requests
    secure: false, // Set to false in development (use true in production)
  });
};

export default generateTokenAndSetCookie;
