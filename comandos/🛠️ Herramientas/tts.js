let { joinVoiceChannel, createAudioPlayer, createAudioResource, AudioPlayerStatus } = require('@discordjs/voice');
let { Client, Message, MessageEmbed } = require("discord.js");
let { getAudioUrl } = require("google-tts-api");
module.exports = {
    name: 'tts',
    description: 'Habla en un canal de voz mediante texto',
    aliases: ["speak", "TTS"],
    /**
     * @param { Client } client 
     * @param { Message } message 
     * @param { String } args
     */
    run: async (client, message, args, prefix) => {
        let string = args.join(" ");
        let voiceChannel = message.member.voice.channel;

        if (!string) return message.channel.send("Por favor escriba algo para hablar!");
        //if (string.length > 200) return message.channel.send("¡Solo puedo hablar 200 palabras!");
        if (!voiceChannel) return message.channel.send("¡Únase a un canal de voz para usar este comando!");

        let audioUrl = await getAudioUrl(string, {
            lang: "pt",
            slow: false,
            host: 'https://translate.google.com',
            timeout: 20000,
        });

        let player = createAudioPlayer();
        let resource = createAudioResource(audioUrl);

        let connection = joinVoiceChannel({
            channelId: message.member.voice.channel.id,
            guildId: message.channel.guild.id,
            adapterCreator: message.channel.guild.voiceAdapterCreator,
        });

        player.play(resource);
        connection.subscribe(player);

        player.on(AudioPlayerStatus.Idle, () => {
            connection.disconnect();
            message.reply('Audio reproducido')
        });
    },
};
