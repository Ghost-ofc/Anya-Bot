const Discord = require('discord.js')
module.exports = {
    name: "leaves",
    aliases: "leaveserver",
    desc: "Sirve para abandonar un servidor",
    owner: true,
    run: async (client, message, args, prefix) => {
        if(!args[0]) return message.reply(`Has mencionado un servidor no valido`)
        const guildid = args[0]
        
        client.guilds.cache.get(guildid).leave()
        const embed = new Discord.MessageEmbed()
        .setTitle('✅ | Leave')
        .setDescription(`He abandonado correctamente ${guildid}`)
        .setColor('GREEN')
        message.reply({embeds: [embed] })
        setTimeout(() => {
            message.delete();
        }, 15000)
    }
}