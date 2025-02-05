const { Sequelize } = require('sequelize');
const config = require('../config/mysqlConfig.js'); // config.json 경로 확인

// 환경 설정 (development, test, production 중 선택)
const env = 'development';
const dbConfig = config[env];

// Sequelize 인스턴스 생성
const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
  }
);

// DB 연결 테스트
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('✅ Connection to the database has been established successfully.');
  } catch (error) {
    console.error('❌ Unable to connect to the database:', error);
  } finally {
    await sequelize.close();
  }
}
testConnection();


// const mongoose = require('mongoose');
// const config = require('./config/mongodbConfig');

// const connectNoSQL = async () => {
//   try {
//     await mongoose.connect(config.uri , {
//       auth: {
//         username: config.username,
//         password: config.password,
//       }
//     });
//     console.log('MongoDB connected successfully');
//   } catch (err) {
//     console.error('MongoDB connection failed:', err.message);
//   }
// };

// module.exports = connectNoSQL();
