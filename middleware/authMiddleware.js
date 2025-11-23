const jwt = require("jsonwebtoken");

module.exports = (req,res,next)=>{
  const token = req.headers.authorization;
  if(!token) return res.status(401).json({msg:"No token"});
  try {
    const user = jwt.verify(token, "secret");
    req.user = user;
    next();
  } catch {
    res.status(401).json({msg:"Invalid token"});
  }
};
