const Discord=require("discord.js");
const{hangman} = require('reconlx');
module.exports={

    name:'hangman',
    alias:[],
    description:"Juega Hangman",
    run: async(client,message,args) => {
        const channel=message.mentions.channels.first()|| message.guild.channels.cache.get(args[0])
        if(!channel)return message.channel.send('por favor especifica un canal')
        const word=args.slice(1).join(" ")
        if(!word)return message.channel.send('por favor especifica una palabra para adivinar')
   
        const hang = new hangman({
            message:    message,
            word: word,
            client: client,
            channelID: channel.id,
        })
        hang.start();
                                                              
    }
}