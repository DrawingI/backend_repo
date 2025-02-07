require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
//mysql을 연동할때 sequelize 객체를 require()만해도 DB 연결이 유지됨
const sequelize = require('./database/mysql/config/mysqlConfig.js');
//mongodb를 연동할떄 직접 실행시켜야 제어가 편하다.
const connectMongoDB = require('./database/mongodb/config/mongodbConfig.js');

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger-output.json");

connectMongoDB();

const app = express();
const PORT = process.env.PORT || 5000;

//미들웨어 설정
app.use(cors());
app.use(bodyParser.json());

app.use('/user', require('./routes/userRoutes.js'));
app.use('/drawing', require('./routes/drawingRoutes.js'));
app.use('/child', require('./routes/childRoutes.js'));

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// 서버 실행
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});