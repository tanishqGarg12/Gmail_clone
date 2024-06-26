import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    console.log(token);
    if (!token) {
      return res.status(401).json({ message: "User not authenticated" });
    }
    const decoded = await jwt.verify(token, process.env.SECRET_KEY);
    if (!decoded) {
      return res.status(401).json({ message: "Invalid token" });
    }
    req.id = decoded.userId;
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export default isAuthenticated;
