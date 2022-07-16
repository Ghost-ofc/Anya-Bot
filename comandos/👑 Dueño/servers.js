const Discord = require('discord.js')
module.exports = {
    name: "servers",
    aliases: [""],
    desc: "Sirve para ver en que servidores está tu bot",
    run: async (client, message, args, prefix) => {


        

   const servers = new Discord.MessageEmbed()

   .setTitle(`¡El bot está en ${client.guilds.cache.size} servidores! uwu`)
   .setDescription(`**__${client.guilds.cache.map(m => m.name).join('\n')}__**`) // aca lanza los nombres de cada sv 
   .setColor("YELLOW")

   message.channel.send({embeds: [servers]})


 }

}