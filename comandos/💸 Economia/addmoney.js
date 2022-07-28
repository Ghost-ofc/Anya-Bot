const ecoSchema = require(`${process.cwd()}/modelos/economia.js`);
module.exports = {
  name: 'addmoney',
  owner: true,
  aliases: [],

   run: async (client, message, args, prefix) => {
    if (!args[0]) return message.reply("❌ **Tienes que especificar al usuario para agregar dinero!**")
    const usuario = message.guild.members.cache.get(args[0]) || message.mentions.members.first();
    if (!usuario) return message.reply("❌ **No se ha encontrado al usuario que has especificado**")
    if(!args[1]) return message.reply("❌ **Tienes que especificar la cantidad que agregaras al usuario!**")
    let cantidad = args[1];
    await ecoSchema.findOneAndUpdate({ userID: usuario.id }, {
      $inc: {
          dinero: cantidad
      },
  })

  return message.reply(`✅ **Has agregado \`${cantidad} monedas\` a \`${usuario.user.tag}\`**`)
  }
}

