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
    .setAuthor(message.guild.name, message.guild.iconURL())
    .setThumbnail(message.guild.iconURL())
    .setColor(`#a51400`)
    .addFields(
      {
        name: `<:admin_qlo:979887657364652044 **Owner**`,
        value: `<@${message.guild.ownerId}>`,
        inline: true
      },
      {
        name: `🆔 **Server ID**`,
        value: `${message.guild.id}`,
        inline: true
      },
      {
        name: `📅 **Fecha de Creacion**`,
        value: `${createsv}`,
        inline: true
      }
    )
    .addFields(
      {
        name: `🧑‍💻 **Total Miembros**`,
        value: `**${message.guild.memberCount}** members`,
        inline: true
      },
      {
        name: `⚔️ ** Channels**`,
        value: `**${message.guild.channels.cache.size}**`,
        inline: true
      },
      {
        name: `⚙️ **Verification level**`,
        value: `${seguridad}`,
        inline: true
      }
    )

    .addFields(
      {
        name: `☄️ **Boost**`,
        value: `**${message.guild.premiumSubscriptionCount}** boost`,
        inline: true
      },
      {
        name: `<🎌 **Roles**`,
        value: `**[$${message.member.guild.roles.cache.size}]** roles`
      }
    )
    message.channel.send({embeds: [serv]})

 }

} 
