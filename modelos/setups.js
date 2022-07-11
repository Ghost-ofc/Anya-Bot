const mongoose = require('mongoose');

const setupSchema = new mongoose.Schema({
    guildID: String,
    reaccion_roles: Array,
    sistema_tickets: { type: Object, default: { canal: "", mensaje: "" } },
    sugerencias: { type: String, default: "" },
    bienvenida: { type: Object, default: { canal: "", mensaje: "", imagen: "" } },
})

const model = mongoose.model("Configuraciones", setupSchema);

module.exports = model;