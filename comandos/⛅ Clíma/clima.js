const weather = require('weather-js')
const Discord = require('discord.js')



module.exports={
    name: "clima",
    aliases:["clima"],
    desc:"Sirve para ver el clima",
    run: async(client, message, args) => {

        if (!args[0]) {
            return message.reply('Debe ingresar una configuración regional para esto. Ejemplo: `!clima Rio de Janeiro`')
        }
        weather.find({ search: args.join(' '), degreeType: 'C' }, function(err, result) {
            if (result [0] != undefined) {
                var current = result[0].current;
                var location = result[0].location;
                const tempEmbed = new Discord.MessageEmbed()
                    .setDescription(`**${current.skytext}**`)
                    .setAuthor({ name:`Clima actual en la region de: ${current.observationpoint}`, iconURL: ''})
                    .setThumbnail(current.imageUrl)
                    .setColor('BLACK')
                    .addField(`horario`, `UTC${location.timezone}`, true)
                    .addField(`Temperatura`, `${current.temperature} Cº`, true)
                    .addField(`Sensación térmica`, `${current.feelslike} Cº`, true)
                    .addField(`Viento`, `${current.winddisplay}`, true)
                    .addField(`Humedad`, `${current.humidity}%`, true)
                    message.channel.send({ embeds: [tempEmbed]})
            } else {
                message.reply({ content: ':x: | ¡Esta ubicación está fuera de mi alcance! Me disculpa.'})
            }
        })

    }
}