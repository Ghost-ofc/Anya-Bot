module.exports = {
    name: "ram",
    desc: "Mira cuanta RAM está usando el bot",
     run: async (client, message, args, cmduser, text, prefix) => {
     message.channel.send(`Estoy usando ${(process.memoryUsage().heapUsed/1024/1024).toFixed(2)} MB de RAM`)
    }
  };