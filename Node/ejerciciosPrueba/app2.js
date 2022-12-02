const express = require('express');

const port = 3000;

const app = express();

app.use(express.static(__dirname + '/public/ejercicio'));

app.listen(port, () =>{
    console.log("Servidor funcionando");
})