const Discord = require("discord.js")
const ms = require("ms")

module.exports = {
  name: "timeout",
  aliases: ["aislar"],
  desc: "Aisla a un miembro del servidor",
  permisos: ["ADMINISTRATOR", "BAN_MEMBERS"],
  permisos_bot: ["ADMINISTRATOR", "BAN_MEMBERS"],
  run: async (client, message, args, prefix) => {
    let usuario = message.guild.members.cache.get(args[0]) || message.mentions.members.first();
    if(!usuario) return message.reply({embeds: [
        new Discord.MessageEmbed()
        .setTitle(`❌ Error ❌`)
        .setDescription(`No se ha encontrado al usuario`)
        .setColor(client.color)
    ]})
    let tiempo = args.slice(1).join(" ")
    if(!tiempo) return message.reply({embeds: [
        new Discord.MessageEmbed()
        .setTitle(`❌ Error ❌`)
        .setDescription(`No se ha mencionado el tiempo`)
        .setColor(client.color)
    ]})
    const time = ms(tiempo)

    if(usuario.permissions.has("ADMINISTRATOR")) return message.reply({embeds: [
        new Discord.MessageEmbed()
        .setTitle(`❌ Error ❌`)
        .setDescription(`No puedo aislar al usuario, Tiene \`permisos\` de administrador`)
        .setColor(client.color)
    ]})

    if(message.guild.me.roles.highest.position > usuario.roles.highest.position){
        if(message.member.roles.highest.position > usuario.roles.highest.position){
            usuario.send({embeds: [
                new Discord.MessageEmbed()
                .setTitle(`Has sido Timeado/Aislado de __${message.guild.name}__`)
                .setDescription(`**Tiempo:**\n\`\`\`yml\n${tiempo}\`\`\``)
                .setColor(client.color)
                .setTimestamp()
            ]}).catch(() => {message.reply({embeds: [
                new Discord.MessageEmbed()
                .setDescription(`No se le ha podido enviar un dm a ${usuario}`)
                .setColor(client.color)
                .setTimestamp()
            ]})})

            message.reply({embeds: [
                new Discord.MessageEmbed()
                .setTitle(`👍 Usuario Timeado/Aislado`)
                .setDescription(`Se ha Aislado exitosamente a <@${usuario.user.id}>`)
                .setColor("RED")
                .addField(`Tiempo:`, tiempo)
                .setTimestamp()
            ]})
            await usuario.timeout(time)
        } else {
            return message.reply({embeds: [
                new Discord.MessageEmbed()
                .setTitle(`❌ Error ❌`)
                .setDescription(`Tu rol esta __por debajo__ de la persona que quieres aislar`)
                .setColor(client.color)
            ]})
        }
      } else {
        return message.reply({embeds: [
            new Discord.MessageEmbed()
            .setTitle(`❌ Error ❌`)
            .setDescription("❌ **Mi rol esta __por debajo__ de la persona que quieres Aislar**")
            .setColor(client.color)
        ]})
      }

            if(message.member.roles.highest.position > usuario.roles.highest.position){
                usuario.timeout()
            } else {
                return message.reply({embeds: [
                    new Discord.MessageEmbed()
                    .setTitle(`❌ Error ❌`)
                    .setDescription("❌ **Tu rol esta __por debajo__ de la persona que quieres Aislar")
                    .setColor(client.color)
                ]})
            }
  }

}