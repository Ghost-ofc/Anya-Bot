const mongoose = require('mongoose');

const welcomeSchema = new mongoose.Schema({
    guildID: String,
    reaccion_roles: Array,
    sistema_tickets: { type: Object, default: { canal: "", mensaje: "" } },
    sugerencias: { type: String, default: "" },
    bienvenida: { type: Object, default: { canal: "", mensaje: "", imagen: "" } },
})

const model = mongoose.model("Bienvenida", welcomeSchema);

module.exports = model;