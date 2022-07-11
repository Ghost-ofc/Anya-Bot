const Canvas = require('canvas');
const Discord = require('discord.js');
const setupSchema = require(`${process.cwd()}/modelos/servidor.js`);
module.exports = client => {
    console.log("CARGADO EL MÓDULO DE BIENVENIDAS")
    client.on("guildMemberAdd", async member => {
        try {
            let data = await setupSchema.findOne({ guildID: member.guild.id });
            if (!data || !data.bienvenida || !member.guild.channels.cache.get(data.bienvenida.canal)) return;
            let bienvenida = await generar_bienvenida(member, data);
            member.guild.channels.cache.get(data.bienvenida.canal).send({
                content: `${data.bienvenida.mensaje.toString().
                    replace(/{user}/, member.user)
                    .replace(/{usertag}/, member.user.tag)
                    .replace(/{username}/, member.user.username)
                    .replace(/{servername}/, member.guild.name)}`, files: [bienvenida]
            })
        } catch (e) { console.log(e) }
    })
}

async function generar_bienvenida(member, data) {
    try {
        let canvas = Canvas.createCanvas(1024, 500);
        let ctx = canvas.getContext("2d");
        //fondo
        let fondo;
        try {
            fondo = await Canvas.loadImage(data.bienvenida.imagen)
        } catch(e){
            fondo = await Canvas.loadImage("https://imgur.com/a/R6FM8dS?width=1095&height=616");
        }
        ctx.drawImage(fondo, 0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = 0.5
        ctx.fillStyle = "rgba(0,0,0, 0.8)"
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        ctx.globalAlpha = 1;
        ctx.lineWidth = 15;
        ctx.shadowColor = "black";
        ctx.shadowBlur = 5;
        
        ctx.shadowColor = "black";
        ctx.shadowBlur = 10;
        
        ctx.shadowColor = "black";
        ctx.shadowBlur = 15;
        ctx.strokeStyle = "#FFFFF9"
        ctx.strokeRect(0, 0, canvas.width, canvas.height)
        ctx.save();

        //crear cicurlo para avatar
        ctx.beginPath();
        ctx.arc(512, canvas.height / 2 - 125 + 50, 125, 0, Math.PI * 2, true); //position of img
        ctx.lineWidth = 15;
        ctx.strokeStyle = "#FFFFF9"
        ctx.stroke();
        ctx.closePath();
        ctx.clip();
        ctx.lineWidth = 15;
        ctx.shadowColor = "black";
        ctx.shadowBlur = 5;
        
        ctx.shadowColor = "black";
        ctx.shadowBlur = 10;
        
        ctx.shadowColor = "black";
        ctx.shadowBlur = 15;
        ctx.strokeStyle = "#FFFFF9"

        //create a circular "mask"
        ctx.beginPath();
        ctx.arc(512, canvas.height / 2 - 125 + 50, 125, 0, Math.PI * 2, true); //position of img
        ctx.closePath();
        ctx.clip();
        ctx.lineWidth = 15;
        ctx.shadowColor = "black";
        ctx.shadowBlur = 5;
        
        ctx.shadowColor = "black";
        ctx.shadowBlur = 10;
        
        ctx.shadowColor = "black";
        ctx.shadowBlur = 15;
        ctx.strokeStyle = "#FFFFF9"
        //define the user avatar
        const avatar = await Canvas.loadImage(member.user.displayAvatarURL({
            format: `png`
        }));
        //draw the avatar
        ctx.drawImage(avatar, canvas.width / 2 - 125, canvas.height / 2 - 125 - 75, 250, 250);
        ctx.restore();
        //TEXTO BIENVENIDA
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.font = '80px "Uni Sans"';
        ctx.shadowColor = "black";
        ctx.shadowBlur = 5;

        ctx.shadowColor = "black";
        ctx.shadowBlur = 10;

        ctx.shadowColor = "black";
        ctx.shadowBlur = 15;
        
        ctx.fillText("BIENVENID@", canvas.width / 2, canvas.height / 2 + 64 + 68)
        //TEXTO USUARIO
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.font = '50px "Uni Sans"';
        ctx.shadowColor = "black";
        ctx.shadowBlur = 5;

        ctx.shadowColor = "black";
        ctx.shadowBlur = 10;

        ctx.shadowColor = "black";
        ctx.shadowBlur = 15;
        
        ctx.fillText(member.user.tag, canvas.width / 2, canvas.height / 2 + 110 + 68)
        //CONTADOR DE MIEMBRO
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.font = '24px "Uni Sans"';
        ctx.shadowColor = "black";
        ctx.shadowBlur = 5;
        
        ctx.shadowColor = "black";
        ctx.shadowBlur = 10;
        
        ctx.shadowColor = "black";
        ctx.shadowBlur = 15;
        
        ctx.fillText(`Eres el miembro #${member.guild.memberCount}`, canvas.width / 2, canvas.height - 24)
        //get it as a discord attachment
        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), `bienvenida-${member.user.username}.png`);
        return attachment;
    } catch (e) { console.log(e) }
}
