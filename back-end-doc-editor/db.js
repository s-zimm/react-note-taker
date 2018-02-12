const Sequelize = require('sequelize');
const sequelize = new Sequelize('note-taker', 'sethzimmerman', '', {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = sequelize;

sequelize.authenticate()
        .then(() => console.log('Connection established!'))
        .catch(err => console.error('Did not establish connection: ', err));