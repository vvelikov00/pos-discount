const Sequelize = require('sequelize');
require('dotenv/config')


const dwhDb = new Sequelize('DWH', 'postgres', process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})


module.exports = dwhDb