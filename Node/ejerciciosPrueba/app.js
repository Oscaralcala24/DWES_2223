var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send("Hola mundo");
});

//app.get('/:name', function(req, res) {
//    res.send("Hola " + req.params.name + "!");
//});

app.get('/ejemploJson', function(req, res) {
    res.send({
        nombre:"Pepe",
        edad: 20,
        aficiones: ["cine","pasear"]
    });
});

app.listen(port,function() {
    console.log("Aplicacion de ejemplo en el puerto 3000");
});
