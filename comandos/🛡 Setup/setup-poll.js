const Discord = require('discord.js');
const setupSchema = require(`${process.cwd()}/modelos/setups.js`);

module.exports = {
    name: "setup-poll",
    aliases: ["poll-setup", "setup-votaciones", "setup-votacione", "setupvotaciones"],
    desc: "Sirve para crear un sistema de Votaciones",
    permisos: ["ADMINISTRATOR"],
    permisos_bot: ["MANAGE_ROLES", "MANAGE_CHANNELS"],
    run: async (client, message, args, prefix) => {
        if(!args.length) return message.reply("❌ **Tienes que especificar el canal de votaciones!**")
        const channel = message.guild.channels.cache.get(args[0]) || message.mentions.channels.first();
        if(!channel || channel.type !== "GUILD_TEXT") return message.reply("❌ **El canal de votaciones que has mencionado no existe!**");
        await setupSchema.findOneAndUpdate({guildID: message.guild.id}, {
            votaciones: channel.id
        })
        return message.reply({
            embeds: [new Discord.MessageEmbed()
            .setTitle(`✅ Establecido el canal de sugerencias a \`${channel.name}\``)
            .setDescription(`*Cada vez que una persona envíe un mensaje en ${channel}, lo convertiré a una votación!*`)
            .setColor(client.color)
            ]
        })
    }
}
