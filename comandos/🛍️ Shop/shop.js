const { paginacion } = require(`${process.cwd()}/handlers/funciones.js`);
const ecoSchema = require(`${process.cwd()}/modelos/economia.js`);
var items = {
    1: "**HBO MAX** \`[ID: 01]\` **-** **950**\n*Cuenta HBO MAX uwu.*",
    2: "**Disney** \`[ID: 02]\` **-** **950**\n*Cuenta de Disney uwu.*",
    3: "**Crunchyroll** \`[ID: 03]\` **-** **750**\n*Cuenta de Crunchyroll uwu.*",
    4: "**Viki** \`[ID: 04]\` **-** **500**\n*Cuenta de Viki uwu.*",
    5: "**Spotify** \`[ID: 05]\` **-** **800**\n*Cuenta de Spotify uwu.*",
    6: "**Canva** \`[ID: 06]\` **-** **300**\n*Cuenta de Canva uwu.*"
}


module.exports = {
    name: "Shop",
    aliases: ["shop", "tienda", "Store"],
    desc: "Comprar cosas del bot",
    run: async (client, message, args, prefix) => {
        const total = await ecoSchema.find();
        await message.guild.members.fetch();
        const ordenado = total.filter(member => message.guild.members.cache.get(member.userID)).sort((a, b) => Number((b.dinero + b.banco) - (a.dinero + a.banco)));
        const texto = ordenado.map((miembro, index) => `\`${index + 1}\` - ${items[index + 1] ?? ""}\n\n`)
        paginacion(client, message, texto, "<:bueno:1001247796881530953> Bienvenido a la tiendita")
    }
}
