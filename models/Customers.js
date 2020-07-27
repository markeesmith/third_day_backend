const { DataTypes } = require('sequelize');
const db        = require('../lib/db');

const Customers = db.define('Customers', {
    CustomerId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    FirstName: {
        type: DataTypes.TEXT
    },
    LastName: {
        type: DataTypes.TEXT
    }
});

module.exports = Customers;