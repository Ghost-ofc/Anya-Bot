const { Message, Client, MessageEmbed } = require("discord.js");
const db = require('../../modelos/db.js');

module.exports = {
    name: "afk",
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        const userId = message.author.id;
        let data = await db.findOne({ userId });
        if(data && data.isAFK) return message.reply({ content: 'Comenzaste a estar Afk' });
        let reason = args.join(' ') || 'Sin Razon';
        let at = Date.now();
        console.log(at);
        if(!data) {
            await db.create({ userId, isAFK: true, at, reason });
        }
        else {
            await db.findOneAndUpdate({ userId }, {
                isAFK: true,
                at,
                reason
            });
        }
        message.reply({ content: `¡Se ha establecido su estado AFK! (${reason})` });
    },
};
