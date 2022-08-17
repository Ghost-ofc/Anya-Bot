const { Client, Message, MessageEmbed } = require('discord.js');
const axios = require('axios');
const Discord = require('discord.js')

module.exports = {
    name: "searchtiktok",
    aliases: ["tiktok", "ttstalk"],
    desc: "Buscar informacion sobre un perfil de Tik Tok",
    owner: false,
    run: async(client, message, args, prefix) => {

        const username = args[0]
		if(!args[0]) return message.reply(" **Tienes que especificar un usuario** ")

        try {
			axios.get(`https://api.lolhuman.xyz/api/stalktiktok/${username}?apikey=85faf717d0545d14074659ad`).then(res => {
				const embed = new Discord.MessageEmbed()
				.setTitle(`Resultado de la busqueda: `)
				.setDescription(
					`🧍**Usuario:** ${res.data.result.username}\n
					 👻**Nombre:** ${res.data.result.nickname}\n
					 ✍️**Bio:** ${res.data.result.bio}\n
					 ✨**Seguidores:** ${res.data.result.followers}\n
					 🪄**Siguiendo:** ${res.data.result.followings}\n
					 👍**Likes:** ${res.data.result.likes}\n
					 🎥**Videos:** ${res.data.result.video}`)
				.setThumbnail(`${res.data.result.user_picture}`)


				message.channel.send({embeds: [embed]});
				console.log(res.data)
			})
			
		} catch(e){
			console.warn(e)
		  }
	}
}