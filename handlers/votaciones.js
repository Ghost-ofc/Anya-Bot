const setupSchema = require(`${process.cwd()}/modelos/setups.js`);
const votossSchema = require(`${process.cwd()}/modelos/votos.js`);
const { asegurar_todo } = require(`${process.cwd()}/handlers/funciones.js`);
const Discord = require('discord.js');
module.exports = client => {
    //evento al enviar mensaje en el canal de sugerencias
    client.on("messageCreate", async message => {
        try {
            //comprobaciones previas
            if (!message.guild || !message.channel || message.author.bot) return;
            //buscamos los datos de la DB
            let setup_dato = await setupSchema.findOne({ guildID: message.guild.id });
            //comprobaciones previas
            if (!setup_dato || !setup_dato.votaciones || !message.guild.channels.cache.get(setup_dato.votaciones) || message.channel.id !== setup_dato.votaciones) return;
            //eliminamos la sugerencia enviada por el autor y lo convertimos en sugerencia con botones
            message.delete().catch(() => { });
            //definimos los botones
            let botones = new Discord.MessageActionRow().addComponents([
                //votar si
                new Discord.MessageButton().setStyle("SECONDARY").setLabel("0").setEmoji("✅").setCustomId("Vote_yes"),
                //votar no
                new Discord.MessageButton().setStyle("SECONDARY").setLabel("0").setEmoji("❌").setCustomId("Vote_no"),
                //ver votanes
                new Discord.MessageButton().setStyle("PRIMARY").setLabel("Who has voted?").setEmoji("❓").setCustomId("See_Vote"),
            ])
            //enviamos el mensaje con los botones
            let msg = await message.channel.send({
                embeds: [
                    new Discord.MessageEmbed()
                        .setAuthor({ name: "Poll created by " + message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
                        .setDescription(`>>> ${message.content}`)
                        .addField(`✅ Positive Votes`, "0 votos", true)
                        .addField(`❌ Negative Votes`, "0 votos", true)
                        .setColor(client.color)
                ],
                components: [botones]
            })
            let data_msg = new votossSchema({
                messageID: msg.id,
                autor: message.author.id,
            })
            data_msg.save();
        } catch (e) { console.log(e) }
    })

    //evento al hacer click en un botón de la sugerencia
    client.on("interactionCreate", async interaction => {
        try {
            //comprobaciones previas
            if (!interaction.guild || !interaction.channel || !interaction.message || !interaction.user) return;
            //aseguramos la base de datos
            asegurar_todo(interaction.guild.id, interaction.user.id);
            //buscamos los datos en la base de datos
            let setup_dato = await setupSchema.findOne({ guildID: interaction.guild.id });
            //buscamos la base de datos del mensaje de la sugerencia
            let msg_data = await votossSchema.findOne({ messageID: interaction.message.id });
            //comprobaciones previas
            if (!msg_data || !setup_dato || !setup_dato.votaciones || interaction.channelId !== setup_dato.votaciones) return;
            switch (interaction.customId) {
                case "Vote_yes": {
                    //si el votante ya ha votado en el mismo voto hacemos return;
                    if (msg_data.yes.includes(interaction.user.id)) return interaction.reply({ content: `You have already voted YES on the vote for <@${msg_data.autor}>`, ephemeral: true});
                    //modificamos la DB
                    if (msg_data.no.includes(interaction.user.id)) msg_data.no.splice(msg_data.no.indexOf(interaction.user.id), 1)
                    msg_data.yes.push(interaction.user.id);
                    msg_data.save();

                    //modificamos el embed
                    interaction.message.embeds[0].fields[0].value = `${msg_data.yes.length} votes`;
                    interaction.message.embeds[0].fields[1].value = `${msg_data.yes.length} votes`;

                    //modificamos los botones con el valor de los votos
                    interaction.message.components[0].components[0].label = msg_data.yes.length.toString();
                    interaction.message.components[0].components[1].label = msg_data.no.length.toString();

                    //editamos el mensaje
                    await interaction.message.edit({ embeds: [interaction.message.embeds[0]], components: [interaction.message.components[0]] });
                    interaction.deferUpdate();
                }
                    break;

                case "Vote_no": {
                    //si el votante ya ha votado en el mismo voto hacemos return;
                    if (msg_data.no.includes(interaction.user.id)) return interaction.reply({ content: `You have already voted NO on the vote for <@${msg_data.autor}>` , ephemeral: true});
                    //modificamos la DB
                    if (msg_data.yes.includes(interaction.user.id)) msg_data.yes.splice(msg_data.yes.indexOf(interaction.user.id), 1)
                    msg_data.no.push(interaction.user.id);
                    msg_data.save();

                    //modificamos el embed
                    interaction.message.embeds[0].fields[0].value = `${msg_data.yes.length} votes`;
                    interaction.message.embeds[0].fields[1].value = `${msg_data.no.length} votes`;

                    //modificamos los botones con el valor de los votos
                    interaction.message.components[0].components[0].label = msg_data.yes.length.toString();
                    interaction.message.components[0].components[1].label = msg_data.no.length.toString();

                    //editamos el mensaje
                    await interaction.message.edit({ embeds: [interaction.message.embeds[0]], components: [interaction.message.components[0]] });
                    interaction.deferUpdate();

                }
                    break;
                    
                case "See_Vote": {
                    interaction.reply({
                        embeds: [new Discord.MessageEmbed()
                        .setTitle(`Votes`)
                        .addField(`✅ Positive Votes`, msg_data.yes.length >= 1 ? msg_data.yes.map(u => `<@${u}>\n`).toString() : "No Votes", true)
                        .addField(`❌ Negative Votes`, msg_data.no.length >= 1 ? msg_data.no.map(u => `<@${u}>\n`).toString() : "No Votes", true)
                        .setColor(client.color)
                        ],
                        ephemeral: true,
                    })
                }
                    break;

                default:
                    break;
            }
        } catch (e) { console.log(e) }
    })
}
