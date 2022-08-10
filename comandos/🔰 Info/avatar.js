const Discord = require('discord.js');
const {MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js');

module.exports = {
    name: "avatar",
    aliases: [],

    run: async (client, message, args) => {

        let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;

        let png = user.avatarURL({ format: 'png', dynamic: true, size: 1024 })
        let jpg = user.avatarURL({ format: 'jpg', dynamic: true, size: 1024 })
        let webp = user.avatarURL({ format: 'webp', dynamic: true, size: 1024 })


        const avatar = new Discord.MessageEmbed()
            .setAuthor({ name: "Avatar of " + user.tag, iconURL: user.displayAvatarURL({ dynamic: true }) })
            .setImage(user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
            .setColor("RANDOM")

        message.channel.send({ embeds: [avatar], components: [new Discord.MessageActionRow().addComponents(
            [
                new Discord.MessageButton().setStyle("LINK").setEmoji("📷").setLabel("PNG").setURL(`${png}`),
                new Discord.MessageButton().setStyle("LINK").setEmoji("📷").setLabel("JPG").setURL(`${jpg}`),
                new Discord.MessageButton().setStyle("LINK").setEmoji("📷").setLabel("WEBP").setURL(`${webp}`),
            ]
        )]})
    }
    
}
