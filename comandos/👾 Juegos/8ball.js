const Discord = require("discord.js")

module.exports = {
    name: "8ball",
    aliases: ["ball"],
    desc: "Comando suerte",
    run: async (client, message, args, prefix) => {
        const pregunta = args.join(' ')
        let respuestas = ['si','no','nose','talvez','repite la pregunta de nuevo','puede ser','porque no','quizas','aveces']
        const repuestafinal = respuestas[Math.floor(Math.random() * respuestas.length)]
        let embed = new Discord.MessageEmbed()

        if(!pregunta) return message.reply('Debes escribir lo que vas a preguntar')
            message.reply({
                embeds: [embed
                    .setTitle("🎱 || BALL")
                    .setDescription(`**${repuestafinal}**`)
                    .setColor("RANDOM")
                    .setTimestamp()
                    .setFooter({ text: `Solicitado por: ${message.author.username}`, iconURL: `${message.author.displayAvatarURL()}` })
                    .setThumbnail("https://media.giphy.com/media/3o7bubjk9UPTmtMX9m/giphy.gif")
                ]
            });
        
    }
}