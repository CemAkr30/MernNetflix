const jwt = require("jsonwebtoken");

const verify = (req, res, next) => {
  console.log(req);
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
      if (err) res.status(403).json("Token is not valid!");
      req.user = user;
      next(); // Bu sayede bu middleware'i kullanan route'a geçiş yapılacak
    });
  } else {
    return res.status(401).json("You are not authenticated!");
  }
};

module.exports = verify;
