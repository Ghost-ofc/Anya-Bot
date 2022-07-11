const schema = require(`${process.cwd()}/modelos/servidor.js`);

module.exports = {
    name:"prefix",
    aliases:["prefijo","cambiar prefijo", "cambiar prefix"],
    desc:"Strve para cambiar el prefijo del bot en el servidor",
    run: async(client, message, args, prefix) => {
        if(!args[0]) return message.reply(" **Tienes que especificar el prefijo del bot** ")
        await schema.findOneAndUpdate({guildID: message.guild.id}, {
            prefijo: args[0]
        })
        return message.reply(`Cambiando el Prefijo de \`${prefix}\` a \`${args[0]}\``)
    }
}