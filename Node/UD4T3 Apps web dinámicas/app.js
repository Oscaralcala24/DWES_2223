const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const baseDeDatos = require("./public/baseDeDatos.js");
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.set("views",__dirname + "/views");

//app.use(express.static(__dirname + "/public"));

let array = [];
app.get('/', (req, res) => {
    res.render("formulario.ejs");
});

app.post("/datos", (req, res) => {
    let usuario = {
        dni:req.body.dni,
        nombre:req.body.nombre,
        apellido:req.body.apellido,
        fechaNacimiento:req.body.fecha,
        email:req.body.email,
        web:req.body.web,
        password:req.body.pass
    }
    array.push(usuario)
    baseDeDatos.validarDNI(usuario.dni,array).then((mensaje) => {
        res.render("datos.ejs", {
        dni: usuario.dni,
        nombre:usuario.nombre,
        apellido:usuario.apellido,
        fechaNacimiento:usuario.fechaNacimiento,
        email:usuario.email,
        web:usuario.web,
        password:usuario.password
    }).catch((mensaje) =>{
        res.render("error.ejs",{mensaje:mensaje})
    }); 
});
});

app.listen(port);