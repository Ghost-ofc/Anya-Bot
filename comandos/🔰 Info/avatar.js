const Discord = require("discord.js");
const {Client,Collection} = require("discord.js");
module.exports = {
    name:"avatar",
    aliases: ["Avatar"],
    description:"Enseñar los avatar",
    usage:"+avatar[@user]",
  run: async(client,message,args, prefix)=>{
        let member = message.mentions.users.first();
        if(!member){
            const embed=new Discord.MessageEmbed()
                .setImage(`${message.author.avatarURL()}`)
                .setColor(0x66b3ff)
                .setFooter(`Avatar de${message.author.tag}`);
            message.channel.send({embeds:[embed]})
    }else{
      const embed2 = new Discord.MessageEmbed()
        .setImage(`${member.avatarURL()}`)
        .setColor(0x66b3ff)
        .setFooter(`Avatar de ${member.tag}`);
   
        message.channel.send({embeds:[embed2]})

    if(!message.guild.me.permissions.has("EMBED_LINKS"))
       return message.reply(
         "No tengo permisos para mensajes de brasaseinsertar enlaces"
       );
    }
  }
}