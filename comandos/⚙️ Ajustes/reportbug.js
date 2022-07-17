const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "reportbug",
    description: "Reporta un bug del bot",
    category: "Utilidad",
    aliases: [],

    run: async (client, message, args) => {
        

        
        const reporte = args.join(" ")
        if(!reporte) return  message.reply({ content: 'Debes decir tu reporte'})

        const embed = new MessageEmbed()
        .setTitle(':x: | ¡Nuevo Reporte!')
        .setDescription(`Descripcion del reporte \n${reporte}\n\nReporte publicada por ${message.author.tag}`)
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter({ text: 'Un Reporte más'})

        client.channels.cache.get("904758896068014142").send({
            content: '<@&904758895510167596> ha llegado un nuevo reporte!',
            embeds: [embed]
        })

        message.reply(`Gracias por tu reporte los desarolladores lo van a mirar`).then(msg => {
            setTimeout(() => msg.delete(), 4000)
})



   }  
}