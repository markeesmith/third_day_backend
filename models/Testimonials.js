const { DataTypes } = require('sequelize');
const db        = require('../lib/db');

const Testimonials = db.define('Testimonials', {
    TestimonialId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    CustomerId: {
        type: DataTypes.INTEGER
    },
    Body: {
        type: DataTypes.TEXT
    },
    Headline: {
        type: DataTypes.TEXT
    }
});

module.exports = Testimonials;