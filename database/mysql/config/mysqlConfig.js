const { Sequelize } = require('sequelize');
require('dotenv').config();

const env = process.env.NODE_ENV || 'development';

const configs =  {
    development: {
        username:process.env.MYSQL_USERNAME,
        password:process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
        host:process.env.MYSQL_HOST,
        dialect:"mysql",
    },
    test: {
    },
    production: {
    },
};

const config = configs[env];

if(!config){
    throw new Error(`No config found for environment: ${env}`);
}

const sequelize = new Sequelize(config.database, config.username, config.password, config);

module.exports = sequelize;


