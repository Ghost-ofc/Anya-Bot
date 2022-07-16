const Discord = require('discord.js');
require('colors')
const glob = require('glob')

module.exports = {
    name: "reload",
    aliases: [],
    desc: "Resetea el bot",
  owner: true,
    run: async (client, message, args, prefix) => {
client.commands.sweep(() => true);
      glob(`${__dirname}/../**/*.js`, async  (err, filesPaths) => {
        if(err) return console.log(err.red)
        filesPaths.forEach(async (file) => {
          delete require.cache[require.resolve(file)];


          const pull = require(file)
          if(pull.name){
            console.log(`Reiniciado ${pull.name} cmd.`.green)
            client.commands.set(pull.name, pull);
            
          }
if(pull.aliases && Array.isArray(pull.aliases)){
  pull.aliases.forEach((alias) => {
    client.aliases.set(alias, pull.name);
    
  })
}
          
        })
      })

      return message.reply(`
      ✔ ¡Comandos Reiniciados!`
      );
    }
}