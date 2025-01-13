

 async function sendMessage(client) {
    client.on('message_create', message => {
        if (message.body === '!help') {
            // Responde com uma lista de comandos
            client.sendMessage(message.from, `texto qualquer`);
        } else if (message.body === '!hello') {
            // Responde com uma mensagem de saudação
            client.sendMessage(message.from, 'Hello Cachorro 😜');
        }
    });
}


// Exporta a função sendMessage para que possa ser importada em outros arquivos
module.exports = {sendMessage};
