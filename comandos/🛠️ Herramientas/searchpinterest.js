const {MessageAttachment, Util} = require('discord.js');
const axios = require('axios');
const Discord = require('discord.js')

module.exports = {
    name: "searchpinterest",
    aliases: ["search-pinterest", "pinterest"],
    desc: "Buscar informacion sobre una imagen de Pinterest",
    owner: false,
    run: async(client, message, args, prefix) => {

        const foto1 = args[0]
		if(!args[0]) return message.reply(" **Tienes que especificar un usuario** ")

        try {
			let foto = `https://leyscoders-api.herokuapp.com/api/pinsearch?q=${foto1}&apikey=MIMINGANZ`;

            const foto2 = new MessageAttachment(foto, 'Pinterest.png');
				
				message.reply({
                    content: 'Imagen encontrada.',
                    files: [foto2],
                });
				
			
		} catch(e){
            console.warn(e)
          }
	}
}
