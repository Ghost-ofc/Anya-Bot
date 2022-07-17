const Discord = require('discord.js')
const NekoClient = require("nekos.life")
const neko = new NekoClient()


module.exports = {
   name: "abrazo",
   alias: ["hug"],
   desc: "Sirve para dar abrazos a las demas personas",
   premiun: false,

   async run(client, message, args){

    const user = await message.mentions.users.first()

    if(!user) return message.channel.send("Debes nombrar a quien abrazar.")

    if (user.id == message.author.id) return message.channel.send("No puedes hacer eso")

    if (user.bot) return message.channel.send("No puedes abrazar a un bot, por nuv 😏")



        neko.hug().then(neko => {
        const embed = new Discord.MessageEmbed()
        .setTitle("Abrazo!")
        .setDescription(`${message.author.username} Le a dado un abrazo a **${user}**`)
        .setImage(neko.url)
        .setColor("RANDOM")

        message.channel.send({ embeds: [embed] })
    })

       function newFunction() {
           return neko.sfw.hug
       }
   }
}