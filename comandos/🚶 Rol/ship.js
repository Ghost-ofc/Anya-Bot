const discord = require("discord.js");
const Canvas = require("canvas");


module.exports.execute = async (client, message) => {
    const canvas = Canvas.createCanvas(700, 250);
    const ctx = canvas.getContext('2d');

    const target = message.mentions.members.first();
    if (target.id == message.author.id) return message.reply({ content: ':error: Please mention someone else and not yourself lol.' });

    const bg = await Canvas.loadImage('https://cdn.discordapp.com/attachments/716216765448978504/858442843197669376/PElrfiWeuvQ.png');
    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);

    const avatar = await Canvas.loadImage(message.member.user.displayAvatarURL({ format: 'png' }));
    ctx.drawImage(avatar, 100, 25, 200, 200);

    const TargetAvatar = await Canvas.loadImage(target.displayAvatarURL({ format: 'png' }));
    ctx.drawImage(TargetAvatar, 400, 25, 200, 200);


    const heart = await Canvas.loadImage('https://cdn.discordapp.com/attachments/716216765448978504/858607217728159744/unknown.png');
    const broken = await Canvas.loadImage('https://cdn.discordapp.com/attachments/716216765448978504/858607537238179840/unknown.png');
    const random = Math.floor(Math.random() * 99) + 1;

    if (random >= 50) {
        ctx.drawImage(heart, 275, 60, 150, 150);
        const attachment = new discord.MessageAttachment(canvas.toBuffer(), 'love.png');
        const embed = new discord.MessageEmbed()
            .setDescription(`${message.member.username} shipped with ${target.user.username} and it is ${random}%`)
            .setImage('attachment://love.png')
            .setColor('GREEN');
        return message.reply({ embeds: [embed], files: [attachment] });

    }
    else {
        ctx.drawImage(broken, 275, 60, 150, 150);
        const attachment = new discord.MessageAttachment(canvas.toBuffer(), 'broken.png');
        const embed = new discord.MessageEmbed()
            .setDescription(`${message.author.username} shipped with ${target.user.username} and it is ${random}%`)
            .setImage('attachment://broken.png')
            .setColor('RED');
        return message.reply({ embeds: [embed], files: [attachment] });

    }
};
module.exports.name = 'ships';