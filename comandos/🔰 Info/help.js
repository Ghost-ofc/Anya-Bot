const { readdirSync } = require('fs');
const {substring} = require('discord.js');
const Discord = require('discord.js');
module.exports = {
    name: "help",
    aliases: ["h", "ayuda", "bothelp"],
    desc: "Sirve para ver la información del Bot",
    run: async (client, message, args, prefix) => {
        //definimos las categorias del bot leyendo la ruta ./comandos
        const categorias = readdirSync('./comandos');
        
        if (args[0]) {
            const comando = client.commands.get(args[0].toLowerCase()) || client.commands.find(c => c.aliases && c.aliases.includes(args[0].toLowerCase()));
            const categoria = categorias.find(categoria => categoria.toLowerCase().endsWith(args[0].toLowerCase()));
            if (comando) {
                let embed = new Discord.MessageEmbed()
                    .setTitle(`Comando \`${comando.name}\``)
                    .setFooter({ text: `© desarollado por JuanD#4698 | 2022`, iconURL: `https://cdn.discordapp.com/avatars/727960956575154208/81e3c7ea8d0b6b67c2f3173620531e56.webp` })
                    .setColor(client.color);
                //condicionales
                if (comando.desc) embed.addField(`✍ Descripción`, `\`\`\`${comando.desc}\`\`\``);
                if (comando.aliases && comando.aliases.length >= 1) embed.addField(`✅ Alias`, `${comando.aliases.map(alias => `\`${alias}\``).join(", ")}`);
                if (comando.permisos && comando.permisos.length >= 1) embed.addField(`👤 Permisos requeridos`, `${comando.permisos.map(permiso => `\`${permiso}\``).join(", ")}`);
                if (comando.permisos_bot && comando.permisos_bot.length >= 1) embed.addField(`🤖 Permisos de BOT requeridos`, `${comando.permisos_bot.map(permiso => `\`${permiso}\``).join(", ")}`);
                return message.reply({ embeds: [embed] })
            } else if (categoria) {
                const comandos_de_categoria = readdirSync(`./comandos/${categoria}`).filter(archivo => archivo.endsWith('.js'));
                return message.reply({
                    embeds: [new Discord.MessageEmbed()
                        .setTitle(`${categoria.split(" ")[0]} ${categoria.split(" ")[1]} ${categoria.split(" ")[0]}`)
                        .setColor(client.color)
                        .setDescription(comandos_de_categoria.length >= 1 ? `>>> *${comandos_de_categoria.map(comando => `\`${comando.replace(/.js/, "")}\``).join(" - ")}*` : `>>> *Todavía no hay comandos en esta categoría...*`)
                    ]
                })
            } else {
                return message.reply(`❌ **No se ha encontrado el comando que has especificado!**\nUsa \`${prefix}help\` para ver los comandos y categorías!`)
            }
        } else {
            var paginaActual = 0;

            //definimos el embed principal
            let ayuda_embed = new Discord.MessageEmbed()
            .setTitle(`Ayuda de __${client.user.tag}__`)
            .setColor(client.color)
            .setDescription(`Bot Multifuncional en Desarollo por \`JuanD#4698\``)
            .addField(`❓ **__¿Quién soy?__**`, `👋 Hola **${message.author.username}**, mi nombre es **__${client.user.username}__**\n🤯 Soy un BOT MULTIFUNCIONAL Incluyendo:\n> **ADMINISTRACIÓN\n> MODERACIÓN\n> MÚSICA**\n*y mucho más!*`)
            .addField(`📈 **__ESTADÍSTICAS__**`, `⚙ **${client.commands.size} Comandos**\n📁 en **${client.guilds.cache.size} Servidores**\n📶 **\`${client.ws.ping}ms\` Ping**\n👤 Desarollado por **[JuanD#4698](https://discord.gg/MBPsvcphGf)**`)
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
            .setFooter({ text: `Página 1 / ${categorias.length+1}\n© desarollado por JuanD#4698 | 2022`, iconURL: `https://cdn.discordapp.com/avatars/727960956575154208/81e3c7ea8d0b6b67c2f3173620531e56.webp` })
            let embeds_pages = [ayuda_embed];

            //por cada categoria, creamos un embed y lo empujamos en embeds_pages
            categorias.map((categoria, index) => {
                const comandos_de_categoria = readdirSync(`./comandos/${categoria}`).filter(archivo => archivo.endsWith('.js'));

                let embed = new Discord.MessageEmbed()
                    .setTitle(`${categoria.split(" ")[0]} ${categoria.split(" ")[1]} ${categoria.split(" ")[0]}`)
                    .setColor(client.color)
                    .setThumbnail(message.guild.iconURL({ dynamic: true }))
                    .setDescription(comandos_de_categoria.length >= 1 ? `>>> *${comandos_de_categoria.map(comando => `\`${comando.replace(/.js/, "")}\``).join(" - ")}*` : `>>> *Todavía no hay comandos en esta categoría...*`)
                    .setFooter({ text: `Página ${index+2} / ${categorias.length+1}\n© desarollado por dewstouh#1088 | 2022`, iconURL: `https://images-ext-2.discordapp.net/external/G2O3wNQkWm957e5Qv3xUpceIQozUug5Z_dfyP9aIKYQ/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/282942681980862474/c2136834f15c6f8633c19c72feeb2427.webp` })
                embeds_pages.push(embed)
            })

            //definimos la selección de categoría
            const seleccion = new Discord.MessageActionRow().addComponents(new Discord.MessageSelectMenu()
                .setCustomId(`SelecciónMenuAyuda`)
                .setMaxValues(5)
                .setMinValues(1)
                .addOptions(categorias.map(categoria => {
                    //definimos el objeto, que será una opción a elegir
                    let objeto = {
                        label: categoria.split(" ")[1].substring(0, 50),
                        value: categoria,
                        description: `Mira los comandos de ${categoria.split(" ")[1].substring(0, 50)}`,
                        emoji: categoria.split(" ")[0],
                    }
                    //devolvemos el objeto creado y lo añadimos como una opción más
                    return objeto;
                }))
            )

            const botones = new Discord.MessageActionRow().addComponents([
                new Discord.MessageButton().setStyle('SUCCESS').setLabel("Atrás").setCustomId("Atrás").setEmoji("929001012176507040"),
                new Discord.MessageButton().setStyle('PRIMARY').setLabel("Inicio").setCustomId("Inicio").setEmoji("🏠"),
                new Discord.MessageButton().setStyle('SUCCESS').setLabel("Avanzar").setCustomId("Avanzar").setEmoji("929001012461707335"),
            ])

            let mensaje_ayuda = await message.reply({ embeds: [ayuda_embed], components: [seleccion, botones] });

            const collector = mensaje_ayuda.createMessageComponentCollector({ filter: i => i.isButton() || i.isSelectMenu() && i.user && i.message.author.id == client.user.id, time: 180e3 });

            collector.on("collect", async (interaccion) => {
                if (interaccion.isButton()) {
                    if(interaccion.user.id !== message.author.id) return interaccion.reply({content: `❌ **No puedes hacer eso! Solo ${message.author}**`, ephemeral: true})
                    switch (interaccion.customId) {
                        case "Atrás": {
                            //Resetemamos el tiempo del collector
                            collector.resetTimer();
                            //Si la pagina a retroceder no es igual a la primera pagina entonces retrocedemos
                            if (paginaActual !== 0) {
                                //Resetemamos el valor de pagina actual -1
                                paginaActual -= 1
                                //Editamos el embeds
                                await mensaje_ayuda.edit({ embeds: [embeds_pages[paginaActual]] }).catch(() => { });
                                await interaccion?.deferUpdate();
                            } else {
                                //Reseteamos al cantidad de embeds - 1
                                paginaActual = embeds_pages.length - 1
                                //Editamos el embeds
                                await mensaje_ayuda.edit({ embeds: [embeds_pages[paginaActual]] }).catch(() => { });
                                await interaccion?.deferUpdate();
                            }
                        }
                            break;
    
                        case "Inicio": {
                            //Resetemamos el tiempo del collector
                            collector.resetTimer();
                            //Si la pagina a retroceder no es igual a la primera pagina entonces retrocedemos
                            paginaActual = 0;
                            await mensaje_ayuda.edit({ embeds: [embeds_pages[paginaActual]] }).catch(() => { });
                            await interaccion?.deferUpdate();
                        }
                            break;
    
                        case "Avanzar": {
                            //Resetemamos el tiempo del collector
                            collector.resetTimer();
                            //Si la pagina a avanzar no es la ultima, entonces avanzamos una página
                            if (paginaActual < embeds_pages.length - 1) {
                                //Aumentamos el valor de pagina actual +1
                                paginaActual++
                                //Editamos el embeds
                                await mensaje_ayuda.edit({ embeds: [embeds_pages[paginaActual]] }).catch(() => { });
                                await interaccion?.deferUpdate();
                            //En caso de que sea la ultima, volvemos a la primera
                            } else {
                                //Reseteamos al cantidad de embeds - 1
                                paginaActual = 0
                                //Editamos el embeds
                                await mensaje_ayuda.edit({ embeds: [embeds_pages[paginaActual]] }).catch(() => { });
                                await interaccion?.deferUpdate();
                            }
                        }
                            break;
    
                        default:
                            break;
                    }
                } else {
                    let embeds = [];
                    for (const seleccionado of interaccion.values) {
                        //definimos los comandos leyendo la ruta del valor seleccionado del menú
                        const comandos_de_categoria = readdirSync(`./comandos/${seleccionado}`).filter(archivo => archivo.endsWith('.js'));

                        let embed = new Discord.MessageEmbed()
                        .setTitle(`${seleccionado.split(" ")[0]} ${seleccionado.split(" ")[1]} ${seleccionado.split(" ")[0]}`)
                        .setColor(client.color)
                        .setThumbnail(message.guild.iconURL({ dynamic: true }))
                        .setDescription(comandos_de_categoria.length >= 1 ? `>>> *${comandos_de_categoria.map(comando => `\`${comando.replace(/.js/, "")}\``).join(" - ")}*` : `>>> *Todavía no hay comandos en esta categoría...*`)
                        .setFooter({text: `© desarollado por JuanD#4698 | 2022`, iconURL: `https://cdn.discordapp.com/avatars/727960956575154208/81e3c7ea8d0b6b67c2f3173620531e56.webp` })

                        embeds.push(embed)
                    }
                    interaccion.reply({ embeds, ephemeral: true })
                }

            });

            collector.on("end", () => {
                mensaje_ayuda.edit({ content: `Tu tiempo ha expirado! Vuelve a escribir \`${prefix}help\` para verlo de nuevo!`, components: [] }).catch(() => { });
            })
        }
    }
}