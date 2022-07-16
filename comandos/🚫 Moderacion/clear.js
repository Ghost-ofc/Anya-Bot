const Discord = require('discord.js');

module.exports = {
    name: "clear",
    aliases: ["limpiar", "eliminar", "eliminar-mensajes", "purge"],
    desc: "Elimina una cantidad de mensajes especificadas en un canal.",
    run: async (client, message, args) => {

        if(!message.member.permissions.has(`MANAGE_MESSAGES`)) return message.reply(":x: **Solo los STAFF de este servidor pueden ejecutar este comando.**")
        if(!message.guild.me.permissions.has(`MANAGE_MESSAGES`)) return message.channel.send(`❌ **Necesito el permiso para controlar los mensajes "MANAGE_MESSAGE"**`)

        const cantidad = args[0]

        if(!cantidad) return message.channel.send(`❌ **Debes de especificar una cantidad de mensajes para eliminar.**`)
        if(isNaN(cantidad)) return message.channel.send(`❌ **Debes de especificar un numero valido.**`)
        if(cantidad > 100) return message.channel.send(`❌ **No puedes eliminar mas de** \`100\` **mensajes a la vez.**`)
        if(cantidad < 1) return message.channel.send(`❌ **No puedes eliminar** \`0\` **mensajes, debes de especificar un numero elevado a** \`0*\``)
        
        message.reply(`❌ **·** ***Espera unos segundos... estoy borrando los mensajes.***`)

        try {
            setTimeout(() => message.channel.bulkDelete(cantidad), 2000)
          } catch {
            param.reply('no se permiten mensajes pasados de 14 dias!!')
          }

        setTimeout(() => message.channel.send(`✅**·** **__Acabo de eliminar__** \`${cantidad}\` **__mensajes.__**`), 2500)
        }
    }