//configurando constantes express, handlebars e sequelize
const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser')
const Post = require('./models/Post')

//config
//template Engine
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars');

//body parser
app.use(bodyParser.urlencoded({extended: false}))
app.set(bodyParser.json())

//public - arquivso estaticos
app.use(express.static(__dirname+'/public'))


//rota para acessar os arquivos atraves do navegador
  // metodo GET renderizar
  app.get('/cad', function (req, res) {
    res.render('formulario');
  })



  //metodo POST para inserir dados no banco pelo formulario, no cadastro --> then(caso sucesso), catch (caso erro)
  app.post('/add',function(req,res){
    Post.create({
      nome: req.body.nome,
      cpf: req.body.cpf,
      telefone: req.body.telefone,
    }).then(function(){
      res.send("FUNCIONARIO CADASTRADO COM SUCESSO!")
    }).catch(function(erro){
      res.send("!!HOUVE ALGUM ERRO!!"+erro)
    })
  })  
//configurando express para rodar na porta 8081
app.listen(8081, function () {
  console.log('Servidor rodando na url http://localhost:8081');
});
