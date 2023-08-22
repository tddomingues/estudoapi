const express = require("express"); // Importa o módulo 'express'

const app = express(); // Cria uma instância do aplicativo Express

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

//método post
app.post("/createproduct", (req, res) => {
  const name = req.body.name;
  const price = req.body.price;

  console.log(name);
  console.log(price);

  res.json({message: `O produto ${name} foi criado com sucesso!`})
});

/*
"app.get("/", (req, res) => { ... });: Aqui, você define uma rota GET para o caminho raiz ("/"). 
Quando um cliente faz uma requisição GET para esse caminho, a função callback é executada. 
Essa função recebe dois parâmetros: req (representando a requisição) e res (representando a resposta). 
No exemplo, estamos enviando uma resposta JSON com uma mensagem "Primeira rota criada".
*/
app.get("/", (req, res) => {
  res.json({
    message: "Primeira rota criada",
  });
});

app.listen(3000); //Isso faz com que o aplicativo Express escute na porta 3000
