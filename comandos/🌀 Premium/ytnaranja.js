const Discord = require('discord.js')
module.exports = {
    name: "porn",
    aliases: ["xxx"],
    desc: "(+18) Contenido no apto para menores (+18).",
    premium: true,
    run: async (client, message, args, prefix) => {

  let porn = args[0]
  if(!args[0]) return message.reply('💔 ** · ¡Debes ingresar una documentación para buscar!**')

  message.reply({embeds: [new Discord.MessageEmbed()
            .setURL(`https://es.pornhub.com/video/search?search=${porn}`)
            .setTitle("FINAL FELIZ")
            .setDescription("Este comando es para mayores de 18 años.\nRecuerda ejecutarlo siempre y cuando estes solo en casa, es tu responsabilidad.")
            .setColor("RED")
            .setTimestamp()
        ]});
    }
    
  }
    