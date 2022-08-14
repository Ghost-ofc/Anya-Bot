const { Client, Message, MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
    name: "dni",
    aliases: ["DNI"],
    desc: "Comprar cosas del bot",
    owner: false,
    premium: true,
    run: async (client, message, args, prefix) => {

        const DNI = args[0]
        if(!DNI) return  message.reply('Debes escribir el DNI que quieres buscar')

        /*axios.get(`https://consulta.api-peru.com/api/dni/${DNI}/52dcc153f3d129c6bb8e78a0a5380887`).then(res => {
            let {numero, nombres, apellido_paterno, apellido_materno, codigo_verificacion, sexo, fecha_nacimiento, fecha_actualizacion, ubigeo_domicilio, direccion , ubigeo_reniec, ubigeo} = res.data

            const embed = new MessageEmbed()
            .setTitle('Resultado de su busqueda: ')
            .setDescription("Si ")
            .addFields(
                {name: '**Nombre**', value: `**${nombres}**`, inline: true},
                {name: '**Apellido Paterno**', value: `**${apellido_paterno}**`, inline: true},
                {name: '**Apellido Materno**', value: `**${apellido_materno}**`, inline: true},
                {name: '**DNI**', value: `**${numero}**`, inline: true},
                //{name: '**DPTO**', value: `**${departamento}**`, inline: true}
            )
            .setColor("DARK_AQUA")
            message.channel.send({ embeds: [embed] });
        })*/


        axios.get(`https://citasenlinea.sisol.gob.pe/Account/FnGetPaciente?idTipoDocumento=1&nroDocumento=${DNI}`
        ).then(res => {

            if(res.data == null) return message.reply("❌ **No se ha encontrado el dni**");
            let {numDocumento, noNombres, apePaterno, apeMaterno, idUbigeoReniec, deDireccion, idSexo, feNacimiento} = res.data

            const embed = new MessageEmbed()
            .setTitle('Resultado de su busqueda: ')
            .setDescription("USE ESTA INFORMACION CON CUIDADO - EL DUEÑO DEL BOT NO SE HACE RESPONSABLE POR EL MAL USO QUE SE LE DE ")
            .addFields(
                {name: '**Nombre**', value: `**${noNombres}**`, inline: true},
                {name: '**Apellido Paterno**', value: `**${apePaterno}**`, inline: true},
                {name: '**Apellido Materno**', value: `**${apeMaterno}**`, inline: true},
                {name: '**DNI**', value: `**${numDocumento}**`, inline: true},
                {name: '**UBIGEO**', value: `**${idUbigeoReniec}**`, inline: true},
                {name: '**DIRECCION**', value: `**${deDireccion}**`, inline: true},
                {name: '**FECHA DE NACIMIENTO**', value: `**${feNacimiento}**`, inline: true},
                {name: '**SEXO**', value: `**${idSexo}**`, inline: true}
            )
            .setColor("DARK_AQUA")
            message.channel.send({ embeds: [embed] });
        })
    
    }
}
