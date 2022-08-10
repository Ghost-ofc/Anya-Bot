module.exports = {
    name: "play",
    aliases: ["reproducir", "p"],
    desc: "Sirve para reproducir una cancion",
    run: async(client, message, args, prefix) => {
        if(!args.length) return message.reply('❌ **Tienes que especificar el nombre de la cancion!!**');
        if(!message.member.voice?.channel) return message.reply('❌ **Tienes que estar en un canal de voz para ejecutar este comando!!**');
        if(message.guild.me.voice?.channel && message.member.voice?.channel.id != message.guild.me.voice?.channel.id) return message.reply('❌ **Tienes que estar en el mismo canal que yo para ejecutar este comando**');
        client.distube.play(message.member.voice?.channel, args.join(" "), {
            member: message.member,
            textChannel: message.channel,
            message
        });
        message.reply(`🔎 **Buscando \`${args.join(" ")}\`...**`);
    }

}   
