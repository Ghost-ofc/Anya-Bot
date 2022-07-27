module.exports = {
    name: "verdad",
    desc: "Sirve para obtener una pregunta para el juego de verdad y reto",
    premium: false,
    run: async (client, message, args, prefix) => {
        const array = ["Si pudieras tener un súper poder, ¿cuál elegirías?", "¿Cuál es tu película preferida?", "¿Cuál es la mayor estupidez que has hecho?", "¿Cuál ha sido tu ultimo sueño?", "Tienes un o una amante?", "¿Alguna vez has bebido alcohol?", "Le temes a la muerte?", "¿Cuál es tu mayor vergüenza?", "¿Cuál es tu postre preferido?", "Entre las personas en esta sala, ¿con quién has soñado alguna vez?", "¿Alguna vez has comprado un artículo en un sexshop?", "¿Alguna vez has llamado a un ex tuyo cuando estabas bebido?", "¿Describe la cena romántica de tus sueños?", "¿Alguna de tus relaciones sexuales ha terminado en el hospital o en la consulta médica?", "¿Cuál ha sido la vez que mas has tardado en ducharte?", "En tu opinión ¿cuál es el país con los chicos/chicas más guapos?", "¿Qué parte de tu cuerpo prefieres?", "¿Cuál es tu posición preferida y por qué?", "¿Qué animal te gustaría ser?", "¿Has imaginado ya cambiarte de sexo?", "¿Cuál es tu peor recuerdo?", "¿Qué harías si te cambiaras de sexo durante veinticuatro horas?", "¿Cuál es tu bebida preferida?"] //hacemos un array con todas las posibles respuestas

        message.reply(`Verdad:\n\`\`\`${array[(Math.floor(Math.random() * array.length))]}\`\`\``) //Aquí enviamos un mensaje con la posible respuesta dentro del array 
    }
}
