const Discord = require('discord.js')

module.exports = {
    name: "invite",
    aliases: ["invitacion", "Invite"],
    desc: "Es para obtener el link de invitacion del bot",
    run: async (client, message, args, prefix) => {
        message.reply({embeds: [new Discord.MessageEmbed()
            .setTitle(`Invitacion uwu`)
            .setDescription(`\n **Click To Invite ${client.user.username}**: **[CLICK FOR THE LINK](https://discord.gg/9XeJKy7d)**`)
            .setImage("https://img1.ak.crunchyroll.com/i/spire2/34a9c44d2c4ce306dfa6e1a68ff5ce481651940307_full.jpg")
            .setColor(client.color)
            .setTimestamp()
            ]
        })
    }
}