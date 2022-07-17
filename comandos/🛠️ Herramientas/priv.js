const Discord = require('discord.js');


module.exports = {
  name: "md",
  alias: [""],
  run: async (client, message, args) => {

    if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send(":triangular_flag_on_post:  `|` No tienes los suficientes permisos")
    
    const userID = args[0]
    if(!userID) return message.channel.send(":triangular_flag_on_post: > `|` Pon una id de un usuario o menciona al usuario")
    const user = message.mentions.members.first() || message.guild.members.cache.get(userID)
    const mensaje = args.slice(1).join(" ")
    if(!mensaje) return message.reply(":triangular_flag_on_post:  `|` Pon el texto que mandare al usuario")
    if(!user) return message.reply(":triangular_flag_on_post:  `|` No se encontro al usuario")

    const embed = new Discord.MessageEmbed()
    .setTitle(`Desde el servidor: ${message.guild.name}`)
    .setDescription(mensaje)
    .setTimestamp()
user.send({ embeds: [embed] })
message.channel.send(":ballot_box_with_check:  `|` Mensaje enviado con exito al usuario")

  }

}