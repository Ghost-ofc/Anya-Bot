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
        name: `<:ServerOwner:981456566073053235> **Owner**`,
        value: `${message.guild.owner}\n\`${message.guild.owner.tag}\``,
        inline: true
      },
      {
        name: `🆔 **Server ID**`,
        value: `${message.guild.id}`,
        inline: true
      },
      {
        name: `📅 **Fecha de Creacion**`,
        value: `${moment.utc(message.guild.createdAt).format('LLLL')}`,
        inline: true
      }
    )
    .addFields(
      {
        name: `<:DiscordMembers:975424273583857694> **Total Miembros**`,
        value: `**${message.guild.memberCount}** members`,
        inline: true
      },
      {
        name: `<:hashtag:975425278195146802> ** Channels**`,
        value: `**${channels.filter(channel => channel.type === 'GUILD_TEXT').size}** text | **${channels.filter(channel => channel.type === 'GUILD_VOICE').size}** voice`,
        inline: true
      },
      {
        name: `<:buffCord:975426852606836746> **Verification level**`,
        value: `${message.guild.verificationLevel}`,
        inline: true
      }
    )

    .addFields(
      {
        name: `<:boost_pink_heart:975424277392269342> **Boost**`,
        value: `**${message.guild.premiumSubscriptionCount}** boost`,
        inline: true
      },
      {
        name: `<:arrow:985092509216690176>   **Roles**`,
        value: `**[${guild.roles.cache.size}]** roles`
      }
    )
    message.channel.send({embeds: [serv]})

 }

} 
