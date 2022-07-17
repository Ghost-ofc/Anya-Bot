const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
  name: "suerte",//Nombre del comando
  alias: [""],//Alias del comando (Por si quieres activar el comando de 2 maneras)
  run: async (client, message, args) => {

 
    let respuestas = [Math.floor(Math.random() * 100)]
    let random = respuestas[Math.floor(Math.random() * respuestas.length)];
    let dinero = [Math.floor(Math.random() * 100)]
    let dn = dinero[Math.floor(Math.random() * respuestas.length)];
   let salud = [Math.floor(Math.random() * 100)]
    let sl = salud[Math.floor(Math.random() * respuestas.length)];
   let suerte = [Math.floor(Math.random() * 100)]
    let sr = suerte[Math.floor(Math.random() * respuestas.length)];
    const embed = new Discord.MessageEmbed()
    .setTitle("Este es el pronostico de tu vida el otro año")
    .addField("Amor" ,`\n💘**${random}**%💘`)
    .addField("Dinero",  `\n💰**${dn}**%💰`)
    .addField("Salud", `\n💉**${sl}**%💉`)
    .addField("Suerte" , `\n🍀**${sr}**%🍀 `)
    .setTimestamp()
    .setColor(0x00ffeb)
    .setFooter("Consultado por " + message.member.displayName, message.author.displayAvatarURL())

    message.channel.send({ embeds: [embed] })

  }

} 