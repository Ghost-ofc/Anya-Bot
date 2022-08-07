const { Client, Message, MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const inventario = require("../../modelos/inventario.js")


module.exports = {
    name: "inventario",
    aliases: ["Inventario", "Inventory"],
    desc: "Mostrar tu inventario",
    run: async(client, message, args, prefix) => {
        const user = message.mentions.users.first() || message.author;
        inventario.findOne({ Guild: message.guild.id, User: user.id }, async(err, data) => {
          if(!data) return message.channel.send(`❌ Tu inventario está vacío.!`)
          const mappedData = Object.keys(data.Inventory).map((key) => {
            return `(${data.Inventory[key]}x) ${key[0].toUpperCase()}${key.slice(1).toLowerCase()} ${data.ItemEmoji[key] || "No emoji!"}`
          }).join("\n")
           const inventoryEmbed = new Discord.MessageEmbed()
        .setTitle(`${message.author.tag}'s Inventory!`)
        .setDescription(mappedData)
        .setColor("#A7D28B");
        message.channel.send({ embeds: [inventoryEmbed] })
         }
       );
      }
}