const discord = require("discord.js");
const Canvas = require("canvas");


module.exports.run = async (client, message, args,) => {

    const canvas = Canvas.createCanvas(700, 350)
    const ctx = canvas.getContext('2d')
    await message.guild.members.fetch();
    const target = message.guild.members.cache.random()
    const mentiontwo = message.guild.members.cache.random()
    //if(!target) return message.channel.send("Porfavor menciona a alguien :3")
/*    if(!mentiontwo) return message.channel.send("Tienes que mencionar a otra persona!!")*/
    //if (mentiontwo.id == target.id) return message.channel.send("No menciones a la misma persona!!")

    const bg = await Canvas.loadImage('https://cdn.discordapp.com/attachments/904758895904448585/1008906563785863350/unknown.png')

    const random = Math.floor(Math.random() * 99) + 1

    let emoji
    let color
    let description
    if(random >= 23) {
    emoji = "https://cdn.discordapp.com/attachments/716216765448978504/858607537238179840/unknown.png"
    color = "RED"
    description = `** ${random}% |  ** Nisiquiera debieron conocerse, los 2 no son compatibles y son muy diferentes`
    }
    
    if(random > 23 && random < 50 ) {
        emoji = "https://cdn.discordapp.com/attachments/716216765448978504/858607537238179840/unknown.png"
        color = "RED"
        description = `** ${random}% | ** Podrian ser amigos que comparten gusto por el furry, pero no veo un futuro mayor entre ellos.`
        } 
    
    if(random >= 50 && random <= 80) {
    emoji = "https://cdn.discordapp.com/attachments/716216765448978504/858607217728159744/unknown.png"
    color = "GREEN"
    description = `** ${random}% | ** Podrian ser una pareja Furry hermosa, los gustos son casi iguales`
    }

    if(random > 80) {
        emoji = "https://cdn.discordapp.com/attachments/716216765448978504/858607217728159744/unknown.png"
        color = "GREEN"
        description = `** ${random}% | ** Serian la mejor pareja furry, pueden llegar a casarse algun dia y asistir a convenciones frikis vestidos de su animal favorito`
        } 



    ctx.drawImage(bg, -10, -10, canvas.width, canvas.height)

    const fumo = await Canvas.loadImage(emoji)
    ctx.drawImage(fumo, 275, 60, 150, 150)

    ctx.beginPath()
    ctx.arc(400 / 2, 250 / 2, 195 / 2, 0, Math.PI * 2)
    ctx.arc(1000 / 2, 250 / 2, 195 / 2, 0, Math.PI * 2)
    ctx.closePath()
    ctx.clip()

    const avatar = await Canvas.loadImage(target.displayAvatarURL({ format: 'png' }))
    ctx.drawImage(avatar, 100, 25, 200, 200)

    const TargetAvatar = await Canvas.loadImage(mentiontwo.displayAvatarURL({ format: 'png' }))
    ctx.drawImage(TargetAvatar, 400, 25, 200, 200)

    const attachment = new discord.MessageAttachment(canvas.toBuffer(), 'fumo.png')
    const embed = new discord.MessageEmbed()
        .setDescription(`${target.user.tag} shipped con ${mentiontwo.user.tag}\n${description}`)
        .setImage('attachment://fumo.png')
        .setColor(color)
    return message.channel.send({ embeds: [embed], files: [attachment] })

    
};
module.exports.name = 'shipfurro';