module.exports = {
    name: "color-random",
    aliases: ["randomcolor", "colorrandom", "color-aleatorio"],
    description: "Generador de Color aleatorio",
    run: async (client, message, args, prefix) => {
          let coloraleatorio = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
          message.channel.send(`Color Generado: \`${coloraleatorio}\``)
    }
  }