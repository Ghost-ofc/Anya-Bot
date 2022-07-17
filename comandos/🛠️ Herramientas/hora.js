const Discord = require('discord.js');

module.exports = {
  name: "hora", 
  alias: [], 
  run:async (client, message, args) =>{
 const usuario = message.mentions.members.first() || message.member;

  const embed = new Discord.MessageEmbed()
    .setTitle (`Hora Actual`)
    .setDescription(`**Hora: <t:${Math.round(Date.now()/1000)}:t>\n\nFecha: <t:${Math.round(Date.now()/1000)}:d>**`)    
    .setTimestamp()
    .setThumbnail("https://c.tenor.com/n-5biYcWQE0AAAAS/time-flies.gif")
    .setColor("GREEN")
  message.channel.send({embeds: [embed]})  
 }
}