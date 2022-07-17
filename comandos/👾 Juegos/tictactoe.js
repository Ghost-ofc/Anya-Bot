module.exports = {
    name: 'ttt',
    category:"info",
    description: 'Make a ttt',
    usage: 'calculator',
    timeout: "2000",
    run: async(client, message, args) => {
const simplydjs = require('simply-djs')

simplydjs.tictactoe(message)
}
}