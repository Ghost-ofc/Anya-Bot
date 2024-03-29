const Discord = require("discord.js");

module.exports = {
    name: "say",
    aliases: ["decir", "comentar"],
    desc: "Sirve para que el staff comente algo desde el bot.",
    run: async (client, message, args) => {
        
        const mensaje = args.join(" ")
        if(!mensaje) return message.reply(":triangular_flag_on_post: **Debes especificar un mensaje para comentar.**")

        setTimeout(function(){
            message.delete()

            const say = new Discord.MessageEmbed()

            .setTitle("COMENTARIO")
            .setDescription(`> ${mensaje} `)
            .setColor("#C1FF00")
    
            message.channel.send({ embeds: [say] })
        }, 1000)

    }
}
