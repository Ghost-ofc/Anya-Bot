const Discord = require('discord.js');

module.exports = {
  name: "banana",
  alias: ["Banana"],
  run: async(client, message, args) => {
    let porcentajes = Math.floor(Math.random() * 100)

    const embed = new Discord.MessageEmbed()   
      .setTitle(`La banana de **${message.author.username}** mide **${porcentajes} cm**`)
      .setImage("https://media.discordapp.net/attachments/755529601333067940/853072892702490624/banana.png")
      .setColor("YELLOW")
      .setTimestamp()
    message.channel.send({ embeds: [embed] })
  }
}