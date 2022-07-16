const Discord = require('discord.js');

module.exports = {
    name: "banner",
    aliases: [],
    desc: "",
    run: async (client, message, args, prefix) => {
const Canvas = require('canvas');

const user_to_fetch = message.mentions.members.first() || message.guild.members.resolve(args[0]) || message.member 

let canvas = Canvas.createCanvas(966, 70);
let ctx = canvas.getContext("2d");
   let user = await client.users.fetch(user_to_fetch.id, {force: true}) 
   if (!user.hexAccentColor && !user.bannerURL() || user.bot) return message.reply({
     embeds: [
       new Discord.MessageEmbed()
       .setDescription(`❌ Este usuario no tiene banner o color.`)
       .setColor("0x303136")
     ]
   })
   ctx.fillStyle = (await user).hexAccentColor;
   ctx.fillRect(0, 0, canvas.width, canvas.height);
   let img = await canvas.toBuffer(); 
   if (!user.bannerURL()) return message.reply({
          files: [{
            attachment: img,
            name: "hex.png"
          }],
          embeds: [
            new Discord.MessageEmbed() 
            .setImage("attachment://hex.png")
            .setTitle(
              "No tiene Banner pero si color")
            .setColor("0x303136")
            .setAuthor(
              user.tag,
              user.displayAvatarURL({
                dynamic: true
              }))
            .setThumbnail(user.displayAvatarURL({ dynamic: true})),
          ],
        });
   message.reply({
        embeds: [
          new Discord.MessageEmbed()
          .setDescription(`Banner de  *${user.username}*!`)
          .setImage(user.bannerURL({
            size: 2048,
            dynamic: true
          }))
          .setColor(`0x303136`)
          .setTimestamp(),
        ],
    });
    }
}