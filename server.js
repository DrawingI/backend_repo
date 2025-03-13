require('dotenv').config();

const express = require('express');
const http = require('http');
const {Server} = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: { origin: "*"}
})
const socketService = require('./service/socketService');

//db연동
const sequelize = require('./database/mysql/config/mysqlConfig.js');
const connectMongoDB = require('./database/mongodb/config/mongodbConfig.js');

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger-output.json");

connectMongoDB();

const PORT = process.env.PORT || 5000;

//미들웨어 설정
app.use(cors({
    origin:"*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//io를 app에 붙임
app.set("io", io);

//RestfulAPI
app.use('/login', require('./routes/loginRoutes.js'));
app.use('/users', require('./routes/userRoutes.js'));
app.use('/drawings', require('./routes/drawingRoutes.js'));
app.use('/child', require('./routes/childRoutes.js'));
app.use('/chat', require('./routes/chatRoutes.js'));

//RestfulAPI 테스트 경로 : 'http://localhost:5000/swagger'
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//Websocket
io.on("connection", (socket) =>{
    console.log("✅ User connected: ", socket.id);

    socket.on("login", (email) => {
        socketService.addUserSocket(email, socket.id);
    });

    socket.on("sendMessage", (message) =>{

    });

    socket.on("disconnect", () => {
        console.log("❌ User disconnected: ", socket.id);
        socketService.removeUserSocket(socket.id);
    });

});

//Websocket, RestfulAPI 서버 실행
server.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on http://0.0.0.0:${PORT}`);

});