const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.checkJwt = (req, res, next) => {
    console.log("Authorization Header: ", req.headers.authorization);

    const header = req.headers.authorization;
    if(!header){
        return res.status(401).json({message: "Access denied. No token provided."});
    }

    const token = header.startsWith("Bearer ") ? header.split(" ")[1] : header;

    try{
        req.user = jwt.verify(token, process.env.SECRET_KEY);
        next();
    }catch(error){
        if(error.name === "TokenExpiredError"){
            return res.status(419).json({
                messsage: "Expired Token."
            });
        }
        if(error.name === "JsonWebTokenError"){
            return res.status(401).json({
                message: "Invalid Token."
            });
        }
    }
}