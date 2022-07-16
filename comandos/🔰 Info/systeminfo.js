const Discord = require("discord.js"); //npm i discord.js
const { mem, cpu, os } = require('node-os-utils'); //npm i node-os-utils
const { stripIndent } = require('common-tags'); //npm i common-tags

module.exports = {
  name: "systeminfo",
  alias: [],

  run:async(client, message, args) => {

   const { totalMemMb, usedMemMb } = await mem.info();

    const systeminfo = stripIndent`
        CPU       : ${cpu.model()}
        Cores     : ${cpu.count()}
        CPU Usage : ${await cpu.usage()} %
        RAM       : ${totalMemMb} MB
        RAM Usage : ${usedMemMb} MB
        `;

message.channel.send({ content: `\`\`\`\n${systeminfo}\`\`\`` })

 }

}