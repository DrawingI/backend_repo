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
        {name: "/user", description: "회원관리 api"},
        {name: "/drawing", description: "그림관련 api"},
        {name: "/child", description: "아이관리 api"}
    ]
};

const outputFile = "./swagger-output.json";
const endpointFiles = [
    path.join(__dirname, "./routes/userRoutes.js"),
    path.join(__dirname, "./routes/drawingRoutes.js"),
    path.join(__dirname, "./routes/childRoutes.js")
];

swaggerAutogen(outputFile, endpointFiles).then(()=>{
    console.log("swagger 문서가 생성되었습니다!");
});