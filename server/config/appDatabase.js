const Sequelize = require('sequelize');
require('dotenv/config')


const appDb = new Sequelize('App', 'postgres', process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

module.exports = appDb
