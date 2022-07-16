module.exports = {
    name: "stop",
    aliases: ["desconectar","pausar", "disconnect"],
    desc: "Sirve para parar una cancion en el chat de voz",
    run: async(client, message, args, prefix, song) => {
        const queue = client.distube.getQueue(message);
        if(!queue) return message.reply('❌ **No hay ninguna cancion reproduciendose!!**')
        if(!message.member.voice?.channel) return message.reply('❌ **Tienes que estar en un canal de voz para ejecutar este comando!!**');
        if(message.guild.me.voice?.channel && message.member.voice?.channel.id != message.guild.me.voice?.channel.id) return message.reply('❌ **Tienes que estar en el mismo canal que yo para ejecutar este comando**');
        client.distube.stop(message);
        message.reply(`💤 **Desconectado**`)
    }

}   