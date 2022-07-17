const Discord = require('discord.js');

module.exports = {
  name: "nuke", 
  alias: [], 

  run: async(client, message, args) =>{

	if(!message.member.permissions.has("ADMINISTRATOR"))return message.reply("No tienes los permisos suficientes! :pensive:\nPermisos faltantes : `ADMINISTRATOR`")
  if(!message.guild.me.permissions.has("ADMINISTRATOR"))return message.reply("No tengo los permisos suficientes! :cry:\nPermisos faltantes : `ADMINISTRATOR`")

	let link = "https://media.giphy.com/media/HhTXt43pk1I1W/giphy.gif"

  const nuke = new Discord.MessageAttachment(link , "nuke.gif")

  var posicion = message.channel.position

	const row = new Discord.MessageActionRow()
	.addComponents(
		[
			new Discord.MessageButton()
		  .setCustomId('zi')
		  .setStyle('SUCCESS')
		  .setLabel('Confirmar')
		  .setEmoji('✅')
		],
		[
			new Discord.MessageButton()
		  .setCustomId('nao')
		  .setStyle('DANGER')
		  .setLabel('Cancelar')
		  .setEmoji('⛔')
		]
	)

	const e = new Discord.MessageEmbed()
	.setTitle('Nuke!')
	.setDescription('**Seguro de querer nukear este canal?**')
	.setFooter({ text: 'Asegurate de que el canal a nukear no sea de la comunidad!'})
	.setColor('BLACK')

	const a = new Discord.MessageEmbed()
	.setTitle('Nuke cancelado correctamente!')
	.setColor('BLACK')

	let m = await message.channel.send({ embeds: [e], components: [row] })
  const filtro = i => i.user.id === message.author.id;

	const collector = m.createMessageComponentCollector({ filter: filtro, time: 60000 })

	collector.on('collect', async i => {
		if(i.customId === 'zi'){
			message.channel.clone().then((canal) => {
        message.channel.delete()

        canal.setPosition(posicion)

        canal.send({content: "Canal nukeado!", files: [nuke]})
      })
		}
		if(i.customId === 'nao'){
			await i.deferUpdate()
			i.editReply({ embeds: [a] , components: [] })
		}
	})

 }

} 