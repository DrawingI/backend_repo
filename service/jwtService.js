const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.loginToken = async(user) =>{

    const token = jwt.sign(
        {type: "JWT", "email": user.email, "password": user.password},
        process.env.LOGIN_KEY,
        {expiresIn: "1h", issuer: "drawingi"}
    );

    return token;
}

exports.childToken = async(child) => {
    const token = jwt.sign(
        {type: "JWT", "id": child.id, "userid":child.userid},
        process.env.CHILD_KEY,
        {expiresIn: "1h", issuer: "drawingi"}
    );

    return token;
}