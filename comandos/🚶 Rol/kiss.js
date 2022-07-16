const Discord = require('discord.js');

var kissgif = [
    "https://nekocdn.com/images/ZWtrGm2B.gif",
    "https://nekocdn.com/images/gCyGiHWC.gif",
    "https://nekocdn.com/images/5rpUvw0k.gif",
    "https://nekocdn.com/images/OlAxsqR6.gif",
    "https://aniyuki.com/wp-content/uploads/2021/07/aniyuki-anime-gif-kiss-14.gif",
    "https://aniyuki.com/wp-content/uploads/2021/07/aniyuki-anime-gif-kiss-13.gif",
    "https://aniyuki.com/wp-content/uploads/2021/07/aniyuki-anime-gif-kiss-15.gif",
    "https://aniyuki.com/wp-content/uploads/2021/07/aniyuki-anime-gif-kiss-16.gif",
    "https://aniyuki.com/wp-content/uploads/2021/07/aniyuki-anime-gif-kiss-18.gif",
    "https://aniyuki.com/wp-content/uploads/2021/07/aniyuki-anime-gif-kiss-19.gif",
    "https://aniyuki.com/wp-content/uploads/2021/07/aniyuki-anime-gif-kiss-11.gif",
    "https://aniyuki.com/wp-content/uploads/2021/07/aniyuki-anime-gif-kiss-10.gif"

];
module.exports = {
    name: "kiss",
    aliases: ["besar"],
    desc: "Sirve para besar un usuario",
    run: async (client, message, args, prefix) => {

    let kiss = kissgif[Math.floor(Math.random() * kissgif.length)];
    const user=await message.mentions.users.first()
    if(!user) return message.channel.send(" **Tienes que mencionar a alguien... -con miedo - **")
    if(user.id == message.author.id)return message.channel.send("No puedes hacer eso fracasado")
    if(user.bot)return message.channel.send("Estas en la lista de los friendzoneado del bot u.u")
    
    const embed = new Discord.MessageEmbed()
    .setTitle("Beso!")
    .setDescription(`${message.author.username} Le ha dado un beso a ${user}`)
    .setImage(`${kiss}`)
    .setFooter(`Pedido por ${message.author.tag}`,message.author.displayAvatarURL({dynamic: true}))
    .setColor("RANDOM")
    

    message.reply({ embeds: [embed] })
    } 
}