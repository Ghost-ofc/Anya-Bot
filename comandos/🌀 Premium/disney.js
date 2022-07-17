module.exports = {
    name: "disney",
    desc: "Sirve para obtener una cuenta premium",
    premium: false,
    run: async (client, message, args, prefix) => {
        const array = ["sdsd@gmail.com:dhd", "omer@gmail.com:hdo"] //hacemos un array con todas las posibles respuestas

        message.reply(`Cuenta Disney: ${array[(Math.floor(Math.random() * array.length))]}`) //Aquí enviamos un mensaje con la posible respuesta dentro del array 
    }
}