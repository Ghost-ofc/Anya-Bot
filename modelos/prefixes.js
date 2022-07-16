let { Schema, model } = require('mongoose') //mongoose

let prefixSchema = new Schema({ 
 
 server: String, 
 prefix: String 
}) // creamos el nuevo esquema

module.exports = model("prefixes", prefixSchema)