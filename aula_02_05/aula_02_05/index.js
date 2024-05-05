const express = require('express');
const app = express();

app.get("/processar_dados",function(req,res){
    res.send("O nome do seu produto é " + req.query.nome + "o valor do seu produto é: " + req.query.valor_do_produto * 3)
})


app.get("/mensagem",function(req,res){
    res.send("Olá, mundo pessoal do Ef!!!")

})

app.listen(3565);
