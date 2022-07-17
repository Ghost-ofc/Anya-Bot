const Discord = require('discord.js');

module.exports = {
    name: 'borracho',
    aliases: ['borracho', 'borrachito'],
    desc: 'Comando para ver cuanto de alcohólico está un usuario',
    run: async (client, message, args, prefix) => {
        const borracho = Math.floor(Math.random() * 100)
        message.channel.send({embeds: [
            new Discord.MessageEmbed()
            .setTitle(`🍺 Porcentaje de Borracho 🍺`)
            .setDescription(`**Tu porcentaje de alcohol en vena es de ${borracho}%**`)
            .setThumbnail(`https://i.imgur.com/EMCghsj.gif`)
            .setColor('#FF0004')
            .setFooter({ text: `Siuuu`})
        ]}).catch(() => {message.reply(`No se ha podido mostrar correctamente el porcentaje de alcohol en vena`)})
    }
}