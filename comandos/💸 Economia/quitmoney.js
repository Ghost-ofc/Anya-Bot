const ecoSchema = require(`${process.cwd()}/modelos/economia.js`);
module.exports = {
  name: 'quitmoney',
  owner: true,
  aliases: [],

   run: async (client, message, args, prefix) => {
    if (!args[0]) return message.reply("❌ **Tienes que especificar al usuario para quitar dinero!**")
    const usuario = message.guild.members.cache.get(args[0]) || message.mentions.members.first();
    if (!usuario) return message.reply("❌ **No se ha encontrado al usuario que has especificado**")
    let data_usuario = await ecoSchema.findOne({ userID: usuario.id });
    if (data_usuario.dinero < 500) return message.reply("❌ **No puedes robar al usuario ya que, tiene menos de \`500 monedas\`**")
    if(!args[1]) return message.reply("❌ **Tienes que especificar la cantidad que quitara al usuario!**")
    let cantidad = args[1];
    await ecoSchema.findOneAndUpdate({ userID: usuario.id }, {
      $inc: {
          dinero: -cantidad
      },
  })

  return message.reply(`✅ **Has quitado \`${cantidad} monedas\` a \`${usuario.user.tag}\`**`)
  }
}