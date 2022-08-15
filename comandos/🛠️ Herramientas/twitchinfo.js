const { MessageEmbed } = require("discord.js");
const superagent = require("superagent");

module.exports = {
    name: "twitchinfo",
    alias: ["twitch-info"],

    run: async (client, message, args, prefix) => {
        //await message.reply({ ephemeral: true });

      const nombrecanal = args[0];
  
      //if(!nombrecanal) return EditReply(interaction, `❌`, `el usuario no es valido` );
  
      try {

        const Response = await superagent.get(
          `https://api.crunchprank.net/twitch/followcount/${nombrecanal.toLowerCase()}`
        );
        const upTime = await superagent.get(
          `https://api.crunchprank.net/twitch/uptime/${nombrecanal.toLowerCase()}`
        );
        const totalViews = await superagent.get(
          `https://api.crunchprank.net/twitch/total_views/${nombrecanal.toLowerCase()}`
        );
        const accountage = await superagent.get(
          `https://api.crunchprank.net/twitch/creation/${nombrecanal.toLowerCase()}`
        );
        const lastGame = await superagent.get(
          `https://api.crunchprank.net/twitch/game/${nombrecanal.toLowerCase()}`
        );
        const avatarimg = await superagent.get(
          `https://api.crunchprank.net/twitch/avatar/${nombrecanal.toLowerCase()}`
        );
  
        const embed = new MessageEmbed()
  
          .setColor(client.color)
          .setTitle(`Estadísticas de: ${nombrecanal}`)
          .setDescription(
            `❣️ **Seguidores:** ${Response.text} \n
              👀 **Visitas:** ${totalViews.text}\n 
              ⌛ **Tiempo en linea:** ${upTime.text} \n
              📝 **Creado:** ${accountage.text}  \n
              🎮 **Ultimo juego:** ${lastGame.text} \n
              🔴 **En directo:** ${upTime.text}`
          )
          .setFooter({ text: `Informacion pedida por: ${message.author.username}`, iconURL:`${message.author.displayAvatarURL()}`})
          .setURL(`https://twitch.tv/${nombrecanal}`)
          .setThumbnail("https://pngimg.com/uploads/twitch/twitch_PNG27.png")
          .setImage(`${avatarimg.text}`)
          .setTimestamp();
  
        message.channel.send({ embeds: [embed] });
  
        //if (upTime.text === `${nombrecanal} is offline`) {
          //upTime.text = "esta Offline";
        } catch (error) {
        console.error(error);
        return message.channel.send({ content: `❌ \`\`\`Ha ocurrido un error al procesar la información por favor intentalo mas tarde, puedes revisar si el usuario que ha introducido es valido\`\`\``, ephemeral: true });
      }

    }
}