const Discord = require("discord.js")
const { Client, Message, MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
    name: "pony",
    alias: ["Pony"],

    run: async (client, message, args, prefix) => {
        //let array = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", ""]
        
        let pony = Math.floor(Math.random() * 50)

        const user = message.guild.members.cache.get(args[0]) || message.mentions.members.first() || message.member;

        let config = {
            method: 'post'
        }

        try{
            axios(`https://pony-api.herokuapp.com/v1/image/${pony}`, config).then(res => {
            let {name, url} = res.data.data[0];

            const embed = new MessageEmbed()
            .setTitle(`${user.user.tag} tu eres el siguiente pony: ${name}`)
            .setColor("RANDOM")
            .setImage(`${url}`)
            

            message.channel.send({ embeds: [embed] })
        })}catch(e){
            console.warn(e.bgRed)
        }
    }
}