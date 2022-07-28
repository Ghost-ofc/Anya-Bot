const mongoose = require('mongoose');
//const config = require('../../config/config.json');
require('dotenv').config()
module.exports = client => {
    
    mongoose.connect(process.env.mongodb,{
        useNewURLParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("Conectado a la Base de Datos de MONGODB".blue);
    }).catch((err) => {
        console.log("ERROR AL CONECTAR A LA BASE DE DATOS DE MONGODB".red);
        console.log(err)
    })
    console.log(`Conectado como ${client.user.tag}`.green);
}
