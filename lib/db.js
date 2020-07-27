require('dotenv').config();
const Sequelize = require('sequelize');

module.exports = new Sequelize(process.env.PGDATABASE, process.env.PGUSER, process.env.PGPASSWORD, {
    host: process.env.PGHOST,
    dialect: 'postgres',
    omitNull: true,
    define: {
        timestamps: false
    },
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
});