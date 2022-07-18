const Discord = require("discord.js");

module.exports = {
    name: "hornycard",
    alias: [""],
    

    run: async(client, message, args)=>{

      const usuario = message.mentions.users.first() || message.author;
    let username = message.mentions.members.first();

    if(!username) return message.channel.send(":x: | Debes mencionar a alguien!")
        
        const user = message.mentions.members.first() || message.author;

        const avatar = user.user.displayAvatarURL({ size: 2048, format: "png"});

        await message.reply({ files: [{ attachment: `https://some-random-api.ml/canvas/horny?avatar=${avatar}`, name: 'file.png'}] })
    }
}