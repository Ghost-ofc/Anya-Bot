const { Client, Message, MessageEmbed } = require('discord.js');
const ecoSchema = require(`${process.cwd()}/modelos/economia.js`);
const inventory = require("../../modelos/inventario.js")
const items = require("../../modelos/shopitems.js")
const Discord = require('discord.js')

module.exports = {
    name: "buy",
    aliases: ["Buy", "comprar"],
    desc: "Comprar cosas de la tienda",
    run: async(client, message, args) => {
        if(!args[0]) return message.channel.send(`❌ Por favor, especifique un artículo para comprar! ¡Escriba shop para obtener información! ¡Y shop {item-name} para obtener más información!`)
        const itemToBuy = args[0].toLowerCase();
        const amount = args[1] || 1;
        if(args[1] === "0") return message.channel.send(`❌ No puedes comprar este articulo **${args[0][0].toUpperCase()}${args[0].slice(1).toLowerCase()}** ¡Debes comprar al menos 1 artículo o simplemente usar buy (artículo) para comprar ese artículo 1 vez!`)
        if(args[1]) {
          if(isNaN(args[1])) return message.channel.send(`❌ Si desea comprar el artículo en una cantidad específica, ¡entonces la cantidad debe ser un número! ¡Y ni una palabra/letra! ¡Puede usar solo buy (artículo) para comprar 1x (artículo)!`)
        }
          const validItems = !!items.find((val) => val.item.toLowerCase() === itemToBuy);
        if(!validItems) return message.reply(`❌ ¡El artículo que querías comprar no es válido!`)
        const itemEmoji = items.find((val) => (val.item.toLowerCase()) === itemToBuy).emoji;
  
        const itemPrice = items.find((val) => (val.item.toLowerCase()) === itemToBuy).price;
  
        const userBalance = await ecoSchema.findOne({userID: message.author.id});
        if(userBalance.dinero < itemPrice) return message.channel.send(`❌ ¡No tienes suficiente saldo en tu billetera para comprar este artículo! [item: **${itemToBuy}**]`)
  
        const params = {
          Guild: message.guild.id,
          User: message.author.id
        }
        inventory.findOne(params, async(err, data) => {
          if(data) {
            const hasItem = Object.keys(data.Inventory).includes(itemToBuy);
            if(!hasItem) {
              data.Inventory[itemToBuy] = amount;
              data.ItemEmoji[itemToBuy] = itemEmoji;
            } else {
              data.Inventory[itemToBuy] += parseInt(amount)
            }
            console.log(data);
            await inventory.findOneAndUpdate(params, data)
          } else {
            new inventory({
              Guild: message.guild.id,
              User: message.author.id,
              ItemEmoji: {
               [itemToBuy]: itemEmoji
              },
              Inventory: {
                [itemToBuy]: amount
              }
            }).save();
          }
          
          const arrayd = ["kenlake@gmail.com\nMohawk456", "yasminvialoux@gmail.com\nCh33ky10", "illedin1@gmail.com\nty94913450", "Sypa93@gmail.com\nMasej1993", "mpachana@gmail.com\nLucian1219", "pacoman757@gmail.com\naA1837924655", "cshin97@gmail.com\nKorea123", "Mdsmj27@gmail.com\nCasa99"]

          if(itemToBuy == "disney" || "Disney"){
          message.author.send({
            embeds: [new Discord.MessageEmbed()
            .setTitle('𝒞𝓊𝑒𝓃𝓉𝒶 𝒹𝒾𝓈𝓃𝑒𝓎')
            .setDescription("Gracias por su compra, si ocurre algun error con la cuenta porfavor hagalo saber al staff. Recuerde que para que la cuenta le dure no debe modificar nada ❤️")
            .addField('Correo y Contraseña: ', `\`\`\`${arrayd[(Math.floor(Math.random() * arrayd.length))]}\`\`\``)
            .setColor('RANDOM')
            ]
        }).catch(() => {
            message.react("❌")
            return message.reply("❌ **No te he podido enviar el DM de los detalles de la cuenta, ponganse en contacto con el staff para poder recibir su cuenta**")
        });}else{


        const arrayh = ["archang91@gmail.com\nXjxb7258!"]

        if(itemToBuy == "hbo" || "HBO"){
          message.author.send({
            embeds: [new Discord.MessageEmbed()
            .setTitle('𝒞𝓊𝑒𝓃𝓉𝒶 𝐻𝐵𝒪 𝑀𝒶𝓍')
            .setDescription("Gracias por su compra, si ocurre algun error con la cuenta porfavor hagalo saber al staff. Recuerde que para que la cuenta le dure no debe modificar nada ❤️")
            .addField('Correo y Contraseña: ', `\`\`\`${arrayh[(Math.floor(Math.random() * arrayh.length))]}\`\`\``)
            .setColor('RANDOM')
            ]
        }).catch(() => {
            message.react("❌")
            return message.reply("❌ **No te he podido enviar el DM de los detalles de la cuenta, ponganse en contacto con el staff para poder recibir su cuenta**")
        });}}

        message.reply(`✅ Has comprado con éxito **${amount}x** **${itemToBuy[0].toUpperCase()}${itemToBuy.slice(1).toLowerCase()}** ${itemEmoji} for ${itemPrice} :dollar:!`)
        await ecoSchema.findOneAndUpdate({ User: message.author.id}, {
            $inc: {
                dinero: -itemPrice
            },
        })
        });

        
        
      } 

}
