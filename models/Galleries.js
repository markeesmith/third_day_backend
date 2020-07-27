const { DataTypes } = require('sequelize');
const db        = require('../lib/db');

const Galleries = db.define('Galleries', {
    GalleryId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    GalleryType: {
        type: DataTypes.TEXT
    },
    GalleryNumItems: {
        type: DataTypes.INTEGER
    },
    GalleryPath: {
        type: DataTypes.TEXT
    }
});

module.exports = Galleries;