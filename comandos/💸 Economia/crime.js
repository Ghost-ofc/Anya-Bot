const { asegurar_todo } = require(`${process.cwd()}/handlers/funciones.js`);
const ecoSchema = require(`${process.cwd()}/modelos/economia.js`);
const duration = require('humanize-duration');
module.exports = {
    name: "crime",
    aliases: ["crimen"],
    desc: "Sirve para robar monedas a un usuario",
    run: async (client, message, args, prefix) => {

        const usuario = message.author

        let data_usuario = await ecoSchema.findOne({ userID: usuario.id });
        if (data_usuario.dinero < 800) return message.reply('❌**No tienes el dinero suficiente para poder pagar una deudad si es que te atrapan**')

        await asegurar_todo(null, usuario.id);

        let data = await ecoSchema.findOne({ userID: message.author.id });

        let tiempo_ms = 300000; // 5 minutos

        if(tiempo_ms - (Date.now() - data.crime) > 0) {
            let tiempo_restante = duration(Date.now() - data.crime - tiempo_ms,
            {
                language: "es",
                units: ["h", "m", "s"],
                round: true,
            })
            return message.reply(`🕑 **Tienes que esperar \`${tiempo_restante}\` para volver a volver a cometer un crimen!!!**`)
        }

        
        
        let cantidad = Math.floor(Math.random() * 700) + 100
        let probabilidad = Math.floor(Math.random() *8) + 0

        console.log(`Cantidad: ${cantidad}, Probabilidad: ${probabilidad} Tiempo_ms: ${tiempo_ms}`)
        
        await ecoSchema.findOneAndUpdate({ userID: message.author.id }, {
            $inc: {
                dinero: cantidad
            },
            crime: Date.now()
        })
        
        if(probabilidad >= 2) return message.reply(`✅ **Has cometido un crimen y has ganado ${cantidad} monedas**`)

        if(probabilidad <= 2) {
            await ecoSchema.findOneAndUpdate({ userID: usuario.id }, {
                $inc: {
                    dinero: -cantidad
                }, 
            })
        } 
        if(probabilidad <= 2) return message.reply(`❌ Te han atrapado en el acto has pagado una deuda de ${cantidad} monedas `)
    }

}