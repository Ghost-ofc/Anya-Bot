const Discord = require('discord.js');

module.exports = {
  name: "comment",
  permisos_bot: ["ADMINISTRATOR"],
  run: async (client, message, args, prefix, channel) => {


message.delete() 

const txt = args.join('%20');   

if (!txt) return message.channel.send("Olvidaste colocar los argumentos.") 
  
let autor = message.author; 

let attachment = new Discord.MessageAttachment(`https://nekobot.xyz/api/imagegen?type=phcomment&image=${message.author.displayAvatarURL()}&text=${txt}&username=${autor.username}&raw=1`,'logo.png') 

message.channel.send({files: [attachment] })    

  }
}