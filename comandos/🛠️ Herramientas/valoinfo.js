const { MessageEmbed } = require("discord.js");
const HenrikDevValorantAPI = require('unofficial-valorant-api');
const VAPI = new HenrikDevValorantAPI();


module.exports = {
    name: "valoinfo",
    alias: ["valo-info"],

    run: async (client, message, args, prefix) => {

    let valo = args[0];
    let tag = args[1];
    let region = args[2];

    const account = await VAPI.getAccount({
        name: `${valo}`,
        tag: `${tag}`
    })

    const mmr = await VAPI.getMMR({
        version: `v1`,
        region: `${region}`,
        name: `${valo}`,
        tag: `${tag}`,
        
    })

    //let {mmr_change_to_last_game, currenttierpatched} = mmr.data.data[4]

    const embed = new MessageEmbed()
  
          .setColor(client.color)
          .setTitle(`📊 Estadísticas de: ${account.data.name}\n`)
          .setDescription(
            `💀 **Nombre:** ${account.data.name} \n
             #️⃣ **Tag:** ${account.data.tag}\n
             🔆 **Uuid:** ${account.data.puuid}\n
             🔮 **Ultima Conexion:** ${account.data.last_update}\n
             🔱 **Nivel:** ${account.data.account_level}\n
             📌 **Ultimo puntaje en competitivo:** ${mmr.data.mmr_change_to_last_game}\n
             🎮 **Rango:** ${mmr.data.currenttierpatched} `
          )
          .setFooter({ text: `Informacion pedida por: ${message.author.username}`, iconURL:`${message.author.displayAvatarURL()}`})
          .setThumbnail("https://img.icons8.com/nolan/512/valorant.png")
          .setTimestamp();
            console.log(mmr.data)
            console.log(account.data)
        message.channel.send({ embeds: [embed] });
    }
}
