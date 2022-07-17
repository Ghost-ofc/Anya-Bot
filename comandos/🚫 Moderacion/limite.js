const Discord = require("discord.js");

module.exports = {
    name: "limite",
    aliases: [],
    des: "comando para limitar la cantidad de usuarios en un canal de voz",
    permisos: "[MIEMBRO]",
    run: async(client, message, args, prefix) => {
        const argumentos = args[0]

        if(!argumentos) return message.reply("tienes que poner un limite")

        if(!message.member.voice?.channel) return message.reply("debes estar en un canal de voz para ejecutar este comando")

        message.member.voice?.channel.edit({userLimit: argumentos});

        message.reply("configurado con exito");
    }
}