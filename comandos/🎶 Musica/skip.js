module.exports = {
    name: "skip",
    aliases: ["saltar"],
    desc: "Sirve para saltar una cancion",
    run: async(client, message, args, prefix) => {
        const queue = client.distube.getQueue(message);
        if(!queue) return message.reply('❌ **No hay ninguna cancion reproduciendose!!**')
        if(!message.member.voice?.channel) return message.reply('❌ **Tienes que estar en un canal de voz para ejecutar este comando!!**');
        if(message.guild.me.voice?.channel && message.member.voice?.channel.id != message.guild.me.voice?.channel.id) return message.reply('❌ **Tienes que estar en el mismo canal que yo para ejecutar este comando**');
        client.distube.skip(message);
        message.reply(`⏭️ **Saltando**`)
    }

}   