const Discord = require("discord.js");
const config = require('./config/config.json')

require('colors')

const client = new Discord.Client({
  intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MESSAGES,
    Discord.Intents.FLAGS.GUILD_MEMBERS,
    Discord.Intents.FLAGS.GUILD_VOICE_STATES,
  ],
});

client.on("ready", () => {
  console.log(`Todo  está activo!`)
  const Estado = [
    `Animando canales uwu`,
    `Anya Bot!`,
  ];

 setInterval(() => {
        client.user.setPresence({ activities: [{ name: Estado[Math.floor(Math.random() * Estado.length)] }], status: 'online', type: "WATCHING" })
    }, 30000)
})

const { WelcomeCard } = require('naotori'), { MessageAttachment } = require('discord.js')

client.on('guildMemberAdd', async (member) => {
   
     
    const embed = new Discord.MessageEmbed()
    .setColor("#0ff12d")
    .setTitle(`Bienvenido a Ghost Pro`)
    .setDescription(`¡Bienvenido  __**${member.user.username}**__ a Ghost Pro\n\n ➡ Relacionate con toda la cominidad y tener Amigos :3 <#894680299236122637>`)
    .setThumbnail(member.user.displayAvatarURL())
    .setFooter({text: `Gracias por unirte :D`,  IconURL: `https://i.imgur.com/CL9Fkoy.jpeg` })
    .setTimestamp();

    let wlcCarc = new WelcomeCard()
    .setBackground('https://i.imgur.com/CL9Fkoy.jpeg')
    .setMemberIcon(member.user.displayAvatarURL({ format: 'png', size: 2048 }))
    .setTitle(`Bienvenido ${member.user.username}`)
    .setDescription('Pasatela bien en este server!')
    .setCircleColor('#000000')
    .setFont('default')

    const card = await wlcCarc.render()
    const welcome = new MessageAttachment(card, 'welcome.png')
    ///// envia el embed :D
    client.channels.cache.get('996200688910614730').send({ embeds: [embed],  content: `**Hola ${member}!** **recuerda pasartela bien**` })
    client.channels.cache.get('996200688910614730').send({ files: [welcome], })
})

client.on("guildCreate", (guild) => {
   
  const canalinv = guild.channels.cache.find(canal => canal.type === 'GUILD_TEXT' && canal.permissionsFor(guild.me).has('SEND_MESSAGES'))
   if(channel.length === 0) return;
  canalinv.send(`Grax por invitarme Amigos<3!`)
  });

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

client.snipes = new Map()
client.on('messageDelete', function(message, channel) {
    client.snipes.set(message.channel.id, {
        content: message.content,
        author: message.author.id, 
        image: message.attachments.first() ? message.attachments.first().proxyURL : null
    })
})

function requerirhandlers(){
  ["commands", "events", "distube"].forEach(handler => {
    try {
      require(`./handlers/${handler}`)(client, Discord)
    }catch(e){
      console.warn(e)
    }
  })
}

requerirhandlers();

client.login(config.token).catch(() => console.log(`-[X]- NO HAS ESPECIFICADO UN TOKEN VALIDO -[X]-`.red))
