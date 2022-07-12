const config = require(`${process.cwd()}/config/config.json`)
const serverSchema = require(`${process.cwd()}/modelos/servidor.js`)
const {asegurar} = require(`${process.cwd()}/handlers/funciones.js`)
module.exports = async (client, message) => {
    if(!message.guild || !message.channel || message.author.bot) return;
    
    let data = await asegurar(serverSchema, "guildID", message.guild.id, {
        guildID: message.guild.id, 
        prefijo: config.prefix  
    });
    if(!message.content.startsWith(data.prefijo)) return;
    const args = message.content.slice(data.prefijo.length).trim().split(" ");
    const cmd = args.shift()?.toLowerCase();
    const command = client.commands.get(cmd)||client.commands.find(c => c.aliases && c.aliases.includes(cmd));
    
    if(message.mentions.members.first.has(client.user)) return message.reply(`Hola! Mi nombre es ${client.user.tag}, si quieres ver mis comandos usa ${prefix}help!`)

    if(command){

        if(command.owner){
            if(!config.ownerIDS.includes(message.author.id)) return message.reply(`❌ **Solo el dueño de este bot puede ejecutar este comando**\n Dueño del bot: ${config.ownerIDS.map(ownerid => `<@${ownerid}>`)}`)
        }

        if(command.permisos){
            if(!message.member.permissions.has(command.permisos)) return message.reply(`❌ **No tienes los suficientes permisos para ejecutar este comando!**\nNecesitas los siguientes permisos: ${command.permisos.map(permiso => `\`${permiso}\``).join(", ")}`)
        }
        command.run(client, message, args, data.prefijo)
    }else{
        return message.reply("No he encontrado el comando que me has especificado!")
    }
}
