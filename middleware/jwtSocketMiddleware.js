const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.jwtSocketMiddleware = (io) => {
    io.use((socket, next) => {
        //const token = socket.handshake.headers.authorization?.split(" ")[1];
        
        const authHeader = socket.handshake.headers.authorization;
        const token = authHeader?.startsWith("Bearer ") ? authHeader.split(" ")[1] : authHeader;
        
        if(!token){ return next(new Error("No token")); }

        try{
            socket.user = jwt.verify(token, process.env.LOGIN_KEY);
            console.log("socket에 더해진 user객체: ", socket.user.id);
            next();
        }catch(error){
            next(new Error("Invalid token"));
    }});
}

