const { MessageAttachment, Util } = require("discord.js");
const { parse } = require('twemoji-parser');

module.exports = {
    name: "emoji",
    aliases: ["jumbo"],
    category: "Util",
    description: "Enlarge any emoji you want.",
    args: true,
    usage: "[emoji]",
    example: ":happy:",
    userPerms: null,
    botPerms: ["USE_EXTERNAL_EMOJIS", "ATTACH_FILES"],
    nsfw: false,
    owner: false,
    cooldown: null,
    run: async (client, message, args, prefix) => {
        const emoji = args[0];
        const custom = Util.parseEmoji(emoji);
        if (custom.id) {
            let emoji = `https://cdn.discordapp.com/emojis/${custom.id}.${custom.animated ? 'gif' : 'png'
                }?size=2048`;

            const emoji2 = new MessageAttachment(emoji, null);

            return message.reply({
                content: 'Custom emoji.',
                files: [emoji2],
            });
        } else {
            let parsed = parse(emoji, { assetType: 'png' });
            if (!parsed[0]) {
                return message.reply("That emoji isn't valid!");
            }
            const parsed2 = `${parsed[0].url}?size=2048`;
            const parsedfinal = new MessageAttachment(parsed2, null);
            return message.reply({
                content: 'Default emoji.',
                files: [parsedfinal],
            });
        }
    }
}