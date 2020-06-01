const jwt = require('jsonwebtoken');

//Get token
function auth(req, res, next) {
  const token = req.header('x-auth-token');

  //Check for token
  if(!token){
      return(res.status(401).json({msg: "No token, authorization denied."}));

    //Verify token
  } else {
      try{
        const decoded = jwt.verify(token, process.env.REACT_APP_LOGIN_SECRET);
        //Add user from payload
        req.user = decoded;
        next();
      } catch (e) {
          res.status(400).json({msg: "Token is not valid"});
      }
  }
}

module.exports = auth;