const Discord=require("discord.js");
const { timeout } = require("reconlx");
module.exports={
    name:"anuncio1",
    aliases:[],
    desc:"Comando para anuncio personalizado",
    run:async(client,message,args,prefix)=>{
       if(message.member.roles.cache.find(rol=>rol.id ==="997897819098718278")){
           if(message.channel.id ==="997999421155455037"){
               var objeto={
                   canal: "",
                   titulo: "",
                   mensaje: "",
                   color: "",
               }
               let quecanal=await message.reply({
                   embeds: [new Discord.MessageEmbed()       
                       .setTitle("¿Cual es el canal al que deseas enviar el anuncio?")
                       .setDescription("** Solamente mencionaoenvia la id del canal **")
                       .setColor("RANDOM")
                       .setFooter({text:`Solicitado por:${message.author.username}`,iconURL: `${message.author.displayAvatarURL()}`})
                       .setThumbnail("https://media.giphy.com/media/xT0Gqn9yuw8hnPGn5K/giphy.gif")
                       .setTimestamp()
                ]
            });
               await quecanal.channel.awaitMessages({
                   filter: m=>m.author.id === message.author.id,
                   max:1,
                   errores: ["time"],
                   time:180000
               }).then(async collected=>{
                    var message=collected.first();
                   const channel=message.mentions.channels.first();
                   objeto.canal=channel.id
               }).catch((e)=>{
                   console.log(e)
                   return client.channels.cache.get("997999421155455037").send({
                       embeds:[new Discord.MessageEmbed()
                           .setTitle("❌ Algo Fallo")
                           .setDescription(`El comando presenta el siguiente fallo:\n${e}`)
                           .setFooter({text:`Solicitado por:${message.author.username}`, iconURL:`${message.author.displayAvatarURL()}`})
                           .setThumbnail("https://media.giphy.com/media/TqiwHbFBaZ4ti/giphy.gif")
                           .setTimestamp()
                           .setColor("DARK_RED")
                       ]
                   });
                });

                let quetitulo=await message.reply({
                    embeds:[new Discord.MessageEmbed()
                        .setTitle("¿Cual titulo quieres enviar?")
                        .setDescription("** Solo manda el titulo que deseas **")
                        .setColor("RANDOM")
                        .setFooter({text:`Solicitado por:${message.author.username}`,iconURL:`${message.author.displayAvatarURL()}`})
                        .setTimestamp()
                        .setThumbnail("https://media.giphy.com/media/xT0Gqn9yuw8hnPGn5K/giphy.gif") 
                   ]
                });
                await quetitulo.channel.awaitMessages({
                    filter:m=>m.author.id === message.author.id,
                    max:1,
                    errores:["time"],
                    time:180000
                }).then(async collected=>{
                    var tt = collected.first();
                    const titulo=message.guild.channels.cache.get(tt.content)
                    objeto.titulo = titulo

                        
                let quemensaje=await message.reply({
                    embeds:[new Discord.MessageEmbed()
                        .setTitle("¿Cual es el mensaje que quieres enviar?")
                        .setDescription("**Solo envia el mensaje**")
                        .setColor("RANDOM")
                        .setFooter({text:`Solicitado por:${message.author.username}`,iconURL:`${message.author.displayAvatarURL()}`})
                        .setTimestamp()
                        .setThumbnail("https://media.giphy.com/media/xT0Gqn9yuw8hnPGn5K/giphy.gif") 
                   ]
                });

                await quemensaje.channel.awaitMessages({
                    filter:m=>m.author.id === message.author.id,
                    max:1,
                    errores:["time"],
                    time:180000
                }).then(async collected => {
                    var message = collected.first();
                    const msg = message.guild.channels.cache.get(message.content)
                    objeto.mensaje = msg
                        
                let quecolor=await message.reply({
                    embeds:[new Discord.MessageEmbed()
                        .setTitle("¿Cual es el color para el anuncio?")
                        .setDescription("** Solamente envia el color en inglesymayusculas **")
                        .setColor("RANDOM")
                        .setFooter({text:`Solicitado por:$(message.author.username)`,iconURL:`${message.author.displayAvatarURL()}`})
                        .setTimestamp()
                        .setThumbnail("https://media.giphy.com/media/xT0Gqn9yuw8hnPGn5K/giphy.gif")
                    ]
                });

                await quecolor.channel.awaitMessages({
                    filter:m=>m.author.id === message.author.id,
                    max:1,
                    errores:["time"],
                    time:180000
                }).then(async collected=>{
                    var col=collected.first();
                    const color=message.guild.channels.cache.get(col.content)
                    objeto.color=color

                    let queimagen=await message.reply({
                        embeds:[new Discord.MessageEmbed()
                            .setTitle("¿Cual es la imagen que quieres enviar?")
                            .setDescription("**Solamente coloca el link**")
                            .setThumbnail("https://media.giphy.com/media/xTOGqn9yuw8hnPGn5K/giphy.gif")
                            .setColor("RANDOM")
                            .setTimestamp()
                            .setFooter({text:`Solicitado por:${message.author.username}`, iconURL:`${message.author.displayAvatarURL()}`})
                        ]
                        });

                await  queimagen.channel.awaitMessages({
                    filter:m=>m.author.id === message.author.id,
                    max:1,
                    errores:["time"],
                    time:180000
                }).then(async collected => {
                    var img = collected.first();
                    const imagen = message.guild.channels.cache.get(img.content)
                    objeto.imagen = imagen

                    let queusuario = await message.reply({
                        embeds:[new Discord.MessageEmbed()
                        .setTitle("¿Cuales roles o miembros quieres etiquetar?")
                        .setDescription("**SOLAMENTE ENVIA LOS ROLES O MIEMBROS**")
                        .setColor("RANDOM")
                        .setFooter({text: `Solicitado por: ${message.author.name}`, iconURL: `${message.author.displayAvatarURL()}`})
                        .setTimestamp()
                        .setThumbnail("https://media.giphy.com/media/xTOGqn9yuw8hnPGn5K/giphy.gif")
                        ]
                    });


                await queusuario.channel.awaitMessages({
                    filter:m=>m.author.id === message.author.id,
                    max:1,
                    errores:["time"],
                    time:180000
                }).then(async collected=>{
                    var arroba=collected.first();
                    const user=message.guild.channels.cache.get(arroba.content)
                    objeto.usuario=user

                await message.guild.channels.cache.get(objeto.canal).send({
                    embeds:[new Discord.MessageEmbed()
                        .setTitle(`${tt.content.substring(0,2048)}`)
                        .setDescription(`${message.content.substring(0,2048)}`)
                        .setImage(`${img.content.substring(0, 2048)}`)
                        .setColor(`${col.content.substring(0, 2048)}`)
                        .setFooter({text: `Solicitado por:${message.author.username}`, iconURL: `${message.author.displayAvatarURL()}`})
                        .setTimestamp()
                        .setThumbnail("https://media.giphy.com/media/10Iy2xE6qvWxC1VHq/giphy.gif")
                    ],
                    content: `${arroba.content.substring(0,2048)}`
                });
                    return message.reply({
                        embeds:[new Discord.MessageEmbed()
                            .setTitle("✅ Anuncio creado con exito")
                            .setDescription(`${message.author}\nEl anuncio fue enviado con exitoa<#${objeto.canal}>`)
                            .setColor("RANDOM")
                            .setFooter({text:`Solicitado por:${message.author.username}`,iconURL:`${message.author.displayAvatarURL()}`})
                            .setThumbnail("https://media.giphy.com/media/MuJDYvbYKzMwONKvdO/giphy.gif")
                        ], ephemeral: true
                    });
                }).catch((e) => {
                    console.log(e)
                        return client.channels.cache.get("997999421155455037").send({
                        embeds:[new Discord.MessageEmbed()
                            .setTitle("❌ Algo Fallo")
                            .setDescription(`El comando presenta el siguiente fallo:\n${e}`)
                            .setFooter({text:`Solicitado por:${message.author.username}`,iconURL:`${message.author.displayAvatarURL()}`})
                            .setThumbnail("https://media.giphy.com/media/TqiwHbFBaZ4ti/giphy.gif")
                            .setTimestamp()
                            .setColor("DARK_RED")
                        ]
                        });
                    });
                }).catch((e) =>{
                    console.log(e)
                        return client.channels.cache.get("997999421155455037").send({
                        embeds:[new Discord.MessageEmbed()
                            .setTitle("❌ Algo Fallo")
                            .setDescription(`El comando presenta el siguiente fallo:\n${e}`)
                            .setFooter({text:`Solicitado por:${message.author.username}`,iconURL:`${message.author.displayAvatarURL()}`})
                            .setThumbnail("https://media.giphy.com/media/TqiwHbFBaZ4ti/giphy.gif")
                            .setTimestamp()
                            .setColor("DARK_RED")
                        ]
                        });
                    });
                }).catch((e) => {
                    console.log(e)
                        return client.channels.cache.get("997999421155455037").send({
                        embeds:[new Discord.MessageEmbed()
                            .setTitle("❌ Algo Fallo")
                            .setDescription(`El comando presenta el siguiente fallo:\n${e}`)
                            .setFooter({text:`Solicitado por:${message.author.username}`,iconURL:`${message.author.displayAvatarURL()}`})
                            .setThumbnail("https://media.giphy.com/media/TqiwHbFBaZ4ti/giphy.gif")
                            .setTimestamp()
                            .setColor("DARK_RED")
                        ]
                        });
                    });
                }).catch((e) =>{
                    return client.channels.cache.get("997999421155455037").send({
                        embeds:[new Discord.MessageEmbed()
                            .setTitle("❌ Algo Fallo")
                            .setDescription(`El comando presenta el siguiente fallo:\n${e}`)
                            .setFooter({text:`Solicitado por:${message.author.username}`,iconURL:`${message.author.displayAvatarURL()}`})
                            .setThumbnail("https://media.giphy.com/media/TqiwHbFBaZ4ti/giphy.gif")
                            .setTimestamp()
                            .setColor("DARK_RED")
                        ]
                        });
                    });
                }).catch((e) => {
                    return client.channels.cache.get("997999421155455037").send({
                        embeds:[new Discord.MessageEmbed()
                            .setTitle("❌ Algo Fallo")
                            .setDescription(`El comando presenta el siguiente fallo:\n${e}`)
                            .setFooter({text:`Solicitado por:${message.author.username}`,iconURL:`${message.author.displayAvatarURL()}`})
                            .setThumbnail("https://media.giphy.com/media/TqiwHbFBaZ4ti/giphy.gif")
                            .setTimestamp()
                            .setColor("DARK_RED")
                        ]
                        });
                    });
                }else{
                    message.reply({
                        embeds: [new Discord.MessageEmbed()
                            .setTitle("❌ Comando erroneo")
                            .setDescription(`${message.author}\n**No tienes el rol:** <@&997897819098718278> **Para ejecutar este comando`)
                            .setFooter({text:`Solicitado por:${message.author.username}`,iconURL:`${message.author.displayAvatarURL()}`})
                            .setThumbnail("https://media.giphy.com/media/TqiwHbFBaZ4ti/giphy.gif")
                            .setColor("RANDOM")
                            .setTimestamp()                            
                        ]
                    }).then((message) => {setTimeout(() => message.delete(), 5000)})
                }
            }else{
                message.reply({
                    embeds: [new Discord.MessageEmbed()
                        .setTitle("❌ Comando erroneo")
                        .setDescription(`${message.author}\n**No tienes el rol:** <@&997897819098718278> **Para ejecutar este comando`)
                        .setFooter({text:`Solicitado por:${message.author.username}`,iconURL:`${message.author.displayAvatarURL()}`})
                        .setThumbnail("https://media.giphy.com/media/TqiwHbFBaZ4ti/giphy.gif")
                        .setColor("RANDOM")
                        .setTimestamp()                            
                    ]
                }).then((message) => {setTimeout(() => message.delete(), 5000)})
            }
        }
    }
