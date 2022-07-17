const Discord = require('discord.js');
const day = require("dayjs")

module.exports = {
  name: "server-info", 
  alias: ['server', 'serverinfo'], 

run: async (client, message, args) => {
    
    const f = message.guild.ownerId;
        
    const createsv = day(message.guild.createdAt).format('DD/MM/YY');

let seguridad; //NONE, LOW, MEDIUM , HIGH , VERY_HIGH
const perm = message.guild.verificationLevel;
if(perm === "NONE"){
seguridad = "No Hay";
}
if(perm === "LOW"){
seguridad = "Bajo";
};
if(perm === "MEDIUM"){
seguridad = "Medio";
};
if(perm === "HIGH"){
seguridad = "Alto";
};
if(perm === "VERY_HIGH"){
seguridad = "MUY ALTO";
};
        
    const serv = new Discord.MessageEmbed()
  .setTitle('Información del servidor!')
    .setThumbnail(message.guild.iconURL())
    .addField('Nombre del servidor :', `${message.guild.name}`)
  .addField('ID :', `${message.guild.id}`)
    .addField(`Fecha de creación :`, `${createsv}`)
    .addField('Owner :', `<@${f}>`)
    .addField('Miembros :', `${message.guild.memberCount}`)
  .addField("Canales : ", `${message.member.guild.channels.cache.size}`)
  .addField("Roles : ", `${message.member.guild.roles.cache.size}`)
    .addField('Boost :', `${message.guild.premiumSubscriptionCount.toString()}`)
    .addField('Nivel de verificación :', `${seguridad}`)
    .setImage(message.guild.bannerURL({ size: 1024}))
    .setColor('RANDOM')
    message.channel.send({embeds: [serv]})

 }

} 