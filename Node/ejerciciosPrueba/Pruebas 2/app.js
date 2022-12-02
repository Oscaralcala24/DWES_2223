const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.send("Esto es un texto plano devuelto al usuario con SEND")
});

app.get("/:nombre/:edad", (req,res) => {
    let nombre = req.params.nombre;
    let numeroLetras = nombre.length;
    let edad = req.params.edad;
    let cadena = "";
    (edad>=18 ? cadena = "es mayor de edad": cadena = "es menor de edad");
    res.render("index.ejs", {nombre: nombre, numeroLetras, esMayor: cadena});  
});

app.listen(port,() =>{
    console.log("Servidor escuchando por el puerto 3000")
});