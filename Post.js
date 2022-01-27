const db = require('./db')
const Post = db.sequelize.define('funcionario',{
  id: {
    type: db.Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  nome: {
    type: db.Sequelize.STRING,
    allowNull: false
  },
  cpf: {
    type: db.Sequelize.BIGINT,
    allowNull: false
  },
  telefone: {
    type: db.Sequelize.BIGINT,
    allowNull: false
  }
})
//mensagem de criação de tabela no BD
//Post.sync({force: true})
//exportando modulo
module.exports = Post