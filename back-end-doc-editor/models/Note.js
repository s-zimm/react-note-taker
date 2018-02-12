const Sequlize = require('sequelize');
const sequelize = require('../db');

const Note = sequelize.define('note', {
    title: {
        type: Sequlize.STRING
    },
    content: {
        type: Sequlize.STRING
    }
});

module.exports = Note;