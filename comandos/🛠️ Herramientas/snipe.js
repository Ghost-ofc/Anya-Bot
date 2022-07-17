const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'snipe',
    description: 'Ver anterior mensaje eliminado.',

    run: async(client, message, args, prefix) => {
        const msg = client.snipes.get(message.channel.id)
        if(!msg) return message.channel.send("No hay mensajes eliminados.")

        const embed = new MessageEmbed()
        .setDescription(`**Mensaje eliminado del canal <#${message.channel.id}>**\n\n` + 'Mensaje de: ' + `<@${msg.author}>` + '\n**Contenido:** \n' + msg.content)
        .setTimestamp()
        .setFooter("Comando snipe")
        if(msg.image) embed.setImage(msg.image)
        message.channel.send({ embeds: [embed] })
    }
}
