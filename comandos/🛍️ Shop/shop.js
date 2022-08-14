const { Client, Message, MessageEmbed } = require('discord.js');
const items = require('../../modelos/shopitems.js')
const Discord = require("discord.js");

module.exports = {
    name: "Shop",
    aliases: ["shop", "tienda", "Store"],
    desc: "Comprar cosas del bot",
    run: async(client,message,args, prefix) => {
        if(items.length === 0 ) return message.channel.send(`❌ No hay ningun articulo en la tienda!`)
  
        const shopList = items
        .map((value, index) => {
          return `**${index+1})**\nName: ${value.item[0].toUpperCase()}${value.item.slice(1).toLowerCase()} ${value.emoji || "¡No hay emoji de este artículo!"}\nPrecio: ${value.price} :dollar:`
        }).join("\n\n")
        
        const shopEmbed = new Discord.MessageEmbed()
        .setTitle("Tienda de Jamyuu :shopping_cart:!")
        .setColor("#A7D28B")
        .setFooter("Pedida por "+ message.author.tag)
        .setDescription(`${shopList}`)
        .setTimestamp();
        message.channel.send({ embeds: [shopEmbed] })
      }
}
