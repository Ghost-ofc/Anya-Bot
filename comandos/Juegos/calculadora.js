const { Discord, MessageEmbed } = require('discord.js')
const math = require('mathjs')

module.exports = {
    name: "calculadora",
    aliases: ["calc"],
    run: async(client, message, args, prefix) => {
        const equation = args.join(' ')
        try {
            message.reply(`\`` + math.evaluate(equation) + `\``)//Resultado de la equacion
        } catch(err) {
            console.warn(err)
            message.reply("La ecuacion es invalida.")
        }
    }
}