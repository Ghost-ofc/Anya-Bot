const Discord = require('discord.js')

var sleepgif = [
    "https://nekocdn.com/images/Y4_zbL2j.gif",
    "https://nekocdn.com/images/bZO8JPuE.gif",
    "https://nekocdn.com/images/UiHZmxit.gif",
    "https://i.pinimg.com/originals/f1/5e/3e/f15e3e84c6fc6ef01419fa7fab86b571.gif"
];
module.exports = {
    name: "sleep",
    aliases: ["mimir"],
    desc: "Sirve para dormir",
    run: async (client, message, args, prefix) => {

    let sleep = sleepgif[Math.floor(Math.random() * sleepgif.length)];

    const embed = new Discord.MessageEmbed()
    .setTitle(`${message.author.tag} se ha ido a mimir o tiene sueño `)
    .setImage(`${sleep}`)
    .setFooter({text: `Zzz no hagan ruido... shhh`})
    .setColor("RANDOM")
    

    message.reply({ embeds: [embed] })
    }
}