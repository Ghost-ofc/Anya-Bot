const Discord = require('discord.js')
const{Snake} = require('discord-gamecord');
module.exports = {
    
    name:"snake",// Nombre del comando
    aliases:["Serpiente"],// Alias del comando,es opcional
    run: async(client, message, args, prefix)=>{

    new Snake({
      message: message,
      slash_command: false,
      embed:{
       title:'Snake Minijuego',// Titulo del minijuego
        color:'GREEN',// EL color del embed del minijuego
       overTitle: 'Fin del Juego', // EL titulo para cuando perdamosoterminemos el fuego
      },

      snake:{head: '🟢', body: '🟩', tail: '🟢'},
      emojis: {
        board: '⬛', 
        food: '🍎',
        up: '⬆️', 
        right: '➡️',
        down: '⬇️',
        left: '⬅️',
      },
    }).startGame() //Iniciamos el juego
}
}