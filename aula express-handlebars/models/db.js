//conectado ao banco de dados usando sequelize
const Sequelize = require('sequelize');
const sequelize = new Sequelize('crud', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql',
})

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize
}