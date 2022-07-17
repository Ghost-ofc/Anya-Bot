const{Client,Message,MessageEmbed}=require("discord.js");
module.exports={
   name:"reseña",
   description:"pone una linda descripción de algo",
   usage:"[prefix]reseña",
   run: async (client,message,args,discord) => {
    const prefixSchema = require(`${process.cwd()}/modelos/prefixes.js`)
       let prefix;
       const data=await prefixSchema.findOne({GuildID:message.guild.id});
       if(data){prefix=data.Prefix}else{prefix="*";
       }
const reseñamx=args.join("")
if(!reseñamx)return message.reply({content:"Debes decir tu reseña"})
const embedmx=new MessageEmbed()
.setTitle(" :heartpulse: |** Nueva reseña!**")
.setDescription(`** Descripción de la reseña **\n${reseñamx}\n\n** Reseña publicada por:**${message.author}`)
.setColor("RANDOM")
.setTimestamp()
.setFooter({text: `Crea tu reseña con ${prefix} (o con el prefijo de tu servidor)`})

message.channel.send({embeds:[embedmx]}); 
}
}
