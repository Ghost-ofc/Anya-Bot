const { Snake } = require('discord-gamecord')

new Snake({
  message: message,
  slash_command: false,
  embed: {
    title: 'Snake Game',
    color: '#5865F2',
    overTitle: 'Game Over',
  },
  snake: { head: '🟢', body: '🟩', tail: '🟢' },
  emojis: {
    board: '⬛', 
    food: '🍎',
    up: '⬆️', 
    right: '➡️',
    down: '⬇️',
    left: '⬅️',
  },
}).startGame()