const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.loginToken = async(user) =>{

    const token = jwt.sign(
        {type: "JWT", "email": user.email, "password": user.password},
        process.env.SECRET_KEY,
        {expiresIn: "1h", issuer: "drawingi"}
    );
    
    return token;
}