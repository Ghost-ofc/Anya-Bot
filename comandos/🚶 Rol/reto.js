module.exports = {
    name: "reto",
    desc: "Sirve para obtener un reto",
    premium: false,
    run: async (client, message, args, prefix) => {
        const array = ["Graba un video de 3 minutos diciendo cosas sobre una persona al azar", "Escribe tu nombre y el de una persona al azar en tu estado y déjalo por 24 horas.", "Véndele un pedazo de basura a alguien del grupo. Usa tus mejores habilidades de vendedor.", "Toca una canción con tus nalgas hasta que alguien la adivine.", "Si eres un chico, ponte maquillaje. Si eres una chica, quítate el maquillaje, y luego manda foto", "Insulta durante 20 segundos.", "Sé la mascota de alguien durante los siguientes 5 minutos.", "Cantarle a alguien una canción romántica a capela", "Llamar a un número desconocido y pedir una pizza. Insistir aunque la persona diga que no es una pizzería.", "Salir al balcón y grabarse gritando ¡chupitos gratis en mi casa!", "Subir a Facebook una de tus peores selfies", "Publicar un estado de WhatsApp vergonzoso", "Mandar una captura de pantalla a tus amigos en la que se vea que le confiesas tu amor a una persona de su elección", "Poner la foto de perfil de uno de tus amigos durante 1 día", "comparte con el resto del grupo un vídeo subido de tono que te guste.", "Haz una lista con las partes del cuerpo que más te gustan de otra persona del grupo.", "Manda un mensaje solo con emojis, otra persona de tu elección tendrá que decodificarlos.", "Imita el grito de cinco animales", "Imita el acento marsellés", "Dibuja un cordero", "Canta tu canción preferida", "Da la vuelta a la sala como un pato", "Envía un mensaje de texto al primer número de tu agenda", "Haz un striptease", "Envia un video bailando el Gangnam Style", "Canta una canción de mon laferte"] //hacemos un array con todas las posibles respuestas

        message.reply(`Reto:\n\`\`\`${array[(Math.floor(Math.random() * array.length))]}\`\`\``) //Aquí enviamos un mensaje con la posible respuesta dentro del array 
    }
}
