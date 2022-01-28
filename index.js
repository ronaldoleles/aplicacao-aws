//configurando constantes express e sequelize
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Post = require('./Post');

//renderizando arquivo formulario
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
//body parser
app.use(bodyParser.urlencoded({extended: false}));
app.set(bodyParser.json());
//carregando o css
app.use(express.static("public")); 

//rota para acessar os arquivos atraves do navegador
  // metodo GET renderizar
 app.get('/log', function (req, res) {
    res.render('telaLogin');
 })

 app.post('/login',function(req, res){
  if((req.body.login == "ronaldo")&&(req.body.senha == 123456)){
        
    res.render('formulario');

  }
  else
  {
    res.send('USUARIO NÃO CADASTRADO');
  }
})



//metodo POST para inserir dados no banco pelo formulario, no cadastro --> then(caso sucesso), catch (caso erro)
  app.post('/add',function(req, res){
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