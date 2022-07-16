const Discord = require('discord.js');
const fietu = require('fietu');

module.exports = {
    name: 'tweet',
    alias: ["twitter"],
    desc: "Hace una imagen con ti nombre y perfil como si estuvieras en twitter",
    usage: "tweet [%text]",
    userPerms: [],
    botPerms: [],
    cooldown: 1000 * 5,
    owner: false,

    run: async(client, message, args, prefix) => {

        const text = args.join(" ");
            if(!text) {
                const tweet = await new fietu.tweet()
                .setAvatar(message.author.displayAvatarURL({ format: 'png' }))
                .setText(`¡Hola, soy ${message.author.tag}!, Mucho gusto.`)
                .setName(message.author.username)
                .tweet()
                const attachment = new Discord.MessageAttachment(tweet, 'tweet.png')
                return message.reply({ files: [attachment] })
            } else {
                if(text.length > 45) {
                    return message.reply("❌ | El texto debe ser menor a 45 caracteres!")
                } else {
                    const tweet2 = await new fietu.tweet()
                    .setAvatar(message.author.displayAvatarURL({ format: 'png' }))
                    .setText(text)
                    .setName(message.author.username)
                    .tweet()
                    const attachment2 = new Discord.MessageAttachment(tweet2, 'tweet.png')
                    return message.reply({ files: [attachment2] })
                }
            }

    }

}