const path = require('path');
const swaggerAutogen = require('swagger-autogen');

const doc = {
    info: {
        title: "DrawingI API test",
        description: "Swagger 자동 문서 생성",
        version: "1.0.0" 
    },
    host: "localhost:5000",
    schemes: ["http"],
    tags: [
        {name: "회원관리", description: "회원관리 api"},
        {name: "미완성 그림관련 api", description: "그림관련 api"},
        {name: "아이관리", description: "아이 등록, 아이 불러오기, 아이 공유 토큰 생성하기, 회원의 모든 아이 불러오기"}
    ]
};

const outputFile = "./swagger-output.json";
const endpointFiles = [
    path.join(__dirname, "./routes/userRoutes.js"),
    path.join(__dirname, "./routes/drawingRoutes.js"),
    path.join(__dirname, "./routes/childRoutes.js"),
    path.join(__dirname, "./routes/loginRoutes.js")
];

swaggerAutogen(outputFile, endpointFiles, doc).then(()=>{
    console.log("swagger 문서가 생성되었습니다!");
});