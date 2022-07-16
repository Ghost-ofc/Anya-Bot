const Discord = require('discord.js')

module.exports = {
  name: "uptime",
  aliases: ["tiempo-encendido", "up"],
desc: "para ver cuanto tiempo lleva prendido el bot",
  run: async(client, message, args, prefix) => {

    let dias = Math.floor(client.uptime / 86400000)
    let horas = Math.floor(client.uptime / 3600000) % 24
    let minutos = Math.floor(client.uptime / 60000) % 60
    let segundos = Math.floor(client.uptime / 1000) % 60

    const uptime = new Discord.MessageEmbed()
    .setDescription(`Llevo prendido: \`${dias}\` dias \`${horas}\` horas \`${minutos}\` minutos y \`${segundos}\` segundos`)
    .setColor("GREEN")
.setTimestamp()
    
    message.reply({ embeds: [uptime]})
  }
}