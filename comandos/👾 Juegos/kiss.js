const Discord = require('discord.js');
const neko = new(require('neko.life'));

module.exports = {
    name: "kiss",
    aliases: ["beso", "besos"],
    desc: "Funcion para dar un beso a otro usuario",
    run: async(client, message, args, prefix) => {
        const user = await message.mentions.user.first()

        if(!user) return message.channel.send("Debes de nombrar a quien quieres besar!")

        if(user.id == message.author.id) return message.channel.send("No puedes hacer eso escoria!")

        if(user.bot) return message.channel.send("Estas en la lista de los friendzoneados del bot T-T")

        neko.sfw.kiss().then(neko => {
            const embed = new Discord.MessageEmbed()
            .setTitle("¡Beso!")
            .setDescription(`${message.author.username} Le he entregado un beso a ${user}`)
            .setImage(neko.url)
            .setColor("DARK_GOLD")
            .setFooter(`Pedido por ${message.author.tag}`, message.author.displayAvatarURL({dynmic: true}))

            message.channel.send({embeds: [embed]})
        })
    }
}