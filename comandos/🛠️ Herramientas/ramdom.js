const Discord = require('discord.js');

module.exports = {
  name: "random", 
  alias: [], 

run: async(client, message, args) => {

  const user = message.guild.members.cache.random();

    const rndom = new Discord.MessageEmbed()
    .setTitle(`**Usuario seleccionado**`)
    .setDescription(`**${user}**`)
    .setThumbnail(user.user.displayAvatarURL({format : 'png', dynamic : 'true'}))
    .setColor('RANDOM')

  message.channel.send({embeds: [rndom]})

 }

} 