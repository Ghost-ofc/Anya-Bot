const Discord = require('discord.js')

module.exports = {
    name: "channelinfo",
    aliases: ["ci", "cinfo", "channel-info"],
    desc: "Muestra información de un canal",
    category: "💡 Información",
    usage: "channelinfo [#canal]",
    owner: false,
run: async (client, message, args, prefix) => {

const canal = message.guild.channels.cache.get(args[0]) || message.mentions.channels.first() || message.channel;

  let canaltype;
  if(canal.type === "GUILD_TEXT") canaltype = ":ctext: Texto"
  if(canal.type === "GUILD_VOICE") canaltype = ":cvoz: Voz"

let category;
  if(canal.parent){
    category = canal.parent.id
  } else {
    category = "Ninguna"
  }

  const embed = new Discord.MessageEmbed()
  .setDescription(`Información del canal <#${canal.id}>`)
  .addField(`Nombre`, `${canal.name}`)
  .addField(`ID`, `${canal.id}`)
  .addField(`Creación`, `<t:${parseInt(canal.createdTimestamp / 1000)}:f> (<t:${parseInt(canal.createdTimestamp / 1000)}:R>)`)
.addField(`Tipo del canal`,  `${canaltype}`)
  .addField(`¿Canal nsfw?`, `${canal.nsfw ? "✅ Si" : "❌ No"}`)
    .addField(`¿Cuenta con una descripción?`, `${canal.topic ? "✅ Si" : "❌ No"}`)
    .addField(`Categoría`, `<#${category}>`)
.setFooter({text: message.guild.name, iconURL: message.guild.iconURL({dynamic: true })})
  .setColor("RANDOM")
  .setTimestamp()

  message.reply({embeds: [embed], allowedMentions: { repliedUser: false }})
    }
}