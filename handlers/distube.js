const {DisTube, Queue, Song, default: dist} = require('distube');
const {SpotifyPlugin} = require('@distube/spotify')
const {SoundCloudPlugin} = require('@distube/soundcloud')

module.exports = (client, Discord) => {

    console.log('Modulo de musica cargado!'.red)
    client.distube = new DisTube(client, {
        emitNewSongOnly: false,
        leaveOnEmpty: true,
        leaveOnFinish: true,
        leaveOnStop: true,
        savePreviousSongs: true,
        emitAddSongWhenCreatingQueue: false,
        searchSongs: 0,
        nsfw: false,
        emptyCooldown: 25,
        ytdlOptions: {
            highWaterMark: 1024 * 1024 * 64,
            quality: "highestaudio",
            format: "audioonly",
            liveBuffer: 60000,
            dlChunkSize: 1024 * 1024 * 4,
        },
        youtubeDL: false,
        plugins: [
            new SpotifyPlugin({
                parallel: true,
                emitEventsAfterFetching: true,
            }),
            new SoundCloudPlugin()
        ],
    });

    client.distube.on("playSong", (queue, song) => {
        queue.textChannel.send({
            embeds: [new Discord.MessageEmbed()
            .setTitle(`Estas escuchando ♫`)
            .setDescription(`${song.name}\n\`${song.formattedDuration}\``)
            .setThumbnail(song.thumbnail)
            .setURL(song.url)
            .setColor("#8400ff")
            .setFooter({text: `Añadida por ${song.user.tag}`, iconURL: song.user.displayAvatarURL({dynamic: true})})
            ]
        })
    });

    client.distube.on("addSong", (queue, song)=>{
        queue.textChannel.send({
            embeds: [new Discord.MessageEmbed()
            .setTitle(`♫ Añadiendo \`${song.name}\` - \`${song.formattedDuration}\` `)
            .setThumbnail(song.thumbnail)
            .setURL(song.url)
            .setColor("#8400ff")
            .setFooter({text: `Añadida por ${song.user.tag}`, iconURL: song.user.displayAvatarURL({dynamic: true})})
            ]
        })
    });


    client.distube.on("initQueue", (queue) => {
        queue.autoplay = true;
    });
};
