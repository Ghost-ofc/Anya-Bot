const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "furro",
    alias: ["fr"],

    run: async (client, message, args, prefix) => {
        let furro = Math.floor(Math.random() * 100)

        const embed = new Discord.MessageEmbed()

        .setTitle(`${message.author.tag} **Tu nivel de furro es de** ${furro}%`)
        .setColor("RANDOM")
        .setImage("https://i.pinimg.com/736x/ee/20/19/ee201936dd277945646648d175aefa9a.jpg")
        .setTimestamp()

        message.channel.send({ embeds: [embed] })
    }
}