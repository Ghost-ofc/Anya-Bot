const discord = require("discord.js");
const Canvas = require("canvas");


module.exports.run = async (client, message, args,) => {

    const canvas = Canvas.createCanvas(700, 250)
    const ctx = canvas.getContext('2d')

    const target = message.mentions.users.first()
    const mentiontwo = message.mentions.users.last()
    if(!target) return message.channel.send("Porfavor menciona a alguien :3")
/*    if(!mentiontwo) return message.channel.send("Tienes que mencionar a otra persona!!")*/
    if (mentiontwo.id == target.id) return message.channel.send("No menciones a la misma persona!!")

    const bg = await Canvas.loadImage('https://i.pinimg.com/736x/5c/57/a8/5c57a8967bbd906f6a047e4c01adcc2a.jpg')

    const random = Math.floor(Math.random() * 99) + 1

    let emoji
    let color
    if(random >= 50) {
    emoji = "https://cdn.discordapp.com/attachments/716216765448978504/858607217728159744/unknown.png"
    color = "GREEN"
    } else if(random < 50) {
    emoji = "https://cdn.discordapp.com/attachments/716216765448978504/858607537238179840/unknown.png"
    color = "RED"
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
        .setDescription(`${target.tag} shipped con ${mentiontwo.tag} y es ${random}%`)
        .setImage('attachment://fumo.png')
        .setColor(color)
    return message.channel.send({ embeds: [embed], files: [attachment] })

    
};
module.exports.name = 'ship';