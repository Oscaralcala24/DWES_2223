const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res) => {
    res.render("formulario.ejs");
});

app.post("/animal", (req, res) => {
    let animalFavorito = req.body.animalIntroducido;
    res.render("animal.ejs", {animalFavorito: animalFavorito});
});

app.listen(port);