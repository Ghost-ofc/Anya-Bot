const config = require(`${process.cwd()}/config/config.json`)
const serverSchema = require(`${process.cwd()}/modelos/servidor.js`)
const { asegurar_todo } = require(`${process.cwd()}/handlers/funciones.js`)
const { Client, Message, MessageEmbed } = require('discord.js');
module.exports = async (client, message) => {
    if (!message.guild || !message.channel || message.author.bot) return;
    await asegurar_todo(message.guild.id, message.author.id);
    let data = await serverSchema.findOne({guildID: message.guild.id})
    if (!message.content.startsWith(data.prefijo)) return;
    const args = message.content.slice(data.prefijo.length).trim().split(" ");
    const cmd = args.shift()?.toLowerCase();
    const command = client.commands.get(cmd) || client.commands.find(c => c.aliases && c.aliases.includes(cmd));
    if (command) {
        if (command.owner) {
            if (!config.ownerIDS.includes(message.author.id)) return message.reply(`❌ **Solo los dueños de este bot pueden ejecutar este comando!**\n**Dueños del bot:** ${config.ownerIDS.map(ownerid => `<@${ownerid}>`)}`)
        }
        if(command.premium){
            if(data.premium){
                if(data.premium <= Date.now()) return message.reply("❌ **Tu suscripción premium ha expirado!**")
            } else {
                return message.reply("❌ **Este es un comando premium!**")
            }
        }


        if(command.permisos_bot){
            if(!message.guild.me.permissions.has(command.permisos_bot)) return message.reply(`❌ **No tengo suficientes permisos para ejecutar este comando!**\nNecesito los siguientes permisos ${command.permisos_bot.map(permiso => `\`${permiso}\``).join(", ")}`)
        }

        if(command.permisos){
            if(!message.member.permissions.has(command.permisos)) return message.reply(`❌ **No tienes suficientes permisos para ejecutar este comando!**\nNecesitas los siguientes permisos ${command.permisos.map(permiso => `\`${permiso}\``).join(", ")}`)
        }

        client.on('messageCreate', async (message) => {
            if(!message.guild || message.author.bot) return;
            
            const db = require('../../modelos/db.js');
            let userId = message.author.id;
            let data = await db.findOne({ userId });
            if(data && data.isAFK) {
                await db.findOneAndUpdate({ userId }, {
                    isAFK: false
                });

                const embed = new MessageEmbed()
                .setAuthor({name: `AFK Removido para ${message.author.tag}`, iconURL: message.author.displayAvatarURL({dynamic: true})})
                .setDescription(` **¡Heyy Volviste!** 
                **¿Tuviste un buen descanso?** 
               **He removido tu estado afk**`)
               .setColor('RANDOM')

                message.reply({ embeds: [embed] });
            }
            const target = message.mentions.members.first();
            if(target) {
                userId = target.id;
                data = await db.findOne({ userId });
                if(!data) return;

                
                const embed = new MessageEmbed()
                .setAuthor({name: `El usuario ${target.user.tag} se encuentra actualmente en modo AFK`, iconURL: target.displayAvatarURL({dynamic: true})})
                .setDescription(`Por favor hagan el favor de no mencionar a ${target.user.tag} hasta su regreso
                **Razon:**\n\`\`\`${data.reason}\`\`\``)
                //message.channel.send({ content: `**${target.nickname}** is currently AFK - ${data.reason} (<t:${Math.floor(parseInt(data.at) / 1000)}:R>)` });
                message.reply({embeds: [embed], content: `Tiempo inactivo: (<t:${Math.floor(parseInt(data.at) / 1000)}:R>)` });
            }
        });    

        //ejecutar el comando
        command.run(client, message, args, data.prefijo, data.idioma);
    } else {
        //opcional
        return message.reply("❌ No he encontrado el comando que me has especificado!");
    }

}
