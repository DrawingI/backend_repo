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
const {jwtSocketMiddleware} = require('./middleware/jwtSocketMiddleware');

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

//socket.io 내부에서 처리되는 로직들을 불러오기
const chatService = require('./service/chatService');
const authService = require('./service/authService');

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

//웹소켓에서 이벤트 이용하기 위한 사용자 jwt 인증 절차
jwtSocketMiddleware(io);

//Websocket
io.on("connection", (socket) =>{
    console.log("✅ User connected: ", socket.id);

    socket.on("login", () => {
        socketService.addUserSocket(socket.user.id, socket.id);
    });

    //현재 회원의 소켓 id 가져오기
    socket.on("getUserSocket", async () => {
        try{
            const socketid = await socketService.getUserSocket(socket.user.id); 
            socket.emit("getUserSocketResponse", {success : true, socketid});
        }catch(error){
            socket.emit("getUserSocketResponse", {success: false, message: "Error retrieving usser socketid"});
            console.log("failed to get and emit socketid: ", error);
        }
    });

    socket.on("disconnect", () => {
        socketService.removeUserSocket(socket.id);
        console.log("❌ User disconnected: ", socket.id);
    });

    socket.on("enterChat", async (chatid) => {
        const roomid = chatid.toString();
        const chatMembers = await chatService.getChatMembersByChatid(chatid);
        const authids = chatMembers.map(chatMember => chatMember.authid);
        const auths = await authService.getAuthsByAuthids(authids);
        const userids = auths.map(auth => auth.userid);
        
        if(userids.includes(socket.user.id)){
            socket.join(roomid);
            console.log(`✅ User ${socket.id} joined room ${chatid}`);
        }else{
            socket.emit("enterChatResponse", {success : false, message: "User is not member of chat"});
        }


        //현재 방에 속한 소켓 ID 목록 확인 (디버깅용)
        io.in(roomid).fetchSockets().then(sockets => {
            console.log(`🛠 Users in room ${roomid}:`, sockets.map(s => s.id));
        });
    });

    socket.on("sendMessage", ({chatid, message}) => {
        const roomid = chatid.toString();
        console.log(`📩 Sending message to chat ${roomid}:`, message);
        io.to(roomid).emit("receiveMessage", message);
    });
});

//Websocket, RestfulAPI 서버 실행
server.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on http://0.0.0.0:${PORT}`);

});