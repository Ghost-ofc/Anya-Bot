const Discord = require('discord.js');
const spanishmeme = require('spanish.memes')

module.exports = {
  name: "meme", 
  alias: [], 

run: async(client, message, args) => {

    const meme = spanishmeme.Meme()

  const embedmeme = new Discord.MessageEmbed()
  .setTitle("**Meme Shitpost!**")
  .setImage(spanishmeme.Meme())
  .setColor("RANDOM")
  .setTimestamp()
  message.channel.send({embeds: [embedmeme]})

 }

} 