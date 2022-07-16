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
    `Ayuda con .help`,
    `Anya Bot!`,
  ];

 setInterval(() => {
        client.user.setPresence({ activities: [{ name: Estado[Math.floor(Math.random() * Estado.length)] }], status: 'online', type: "WATCHING" })
    }, 30000)
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
  ["commands", "events", "distube", "MemberAdd"].forEach(handler => {
    try {
      require(`./handlers/${handler}`)(client, Discord)
    }catch(e){
      console.warn(e)
    }
  })
}

requerirhandlers();

client.login(config.token).catch(() => console.log(`-[X]- NO HAS ESPECIFICADO UN TOKEN VALIDO -[X]-`.red))