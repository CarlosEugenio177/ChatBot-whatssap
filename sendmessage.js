/* FUNÇÃO TESTE PARA LEITURA DE QUALQUER MENSAGEM
        OBS: O COD ABAIXO GERA UM LOOP, RECOMENDO O USO APÓS A PROXIMA ATUALIZAÇÃO DO COD(se eu tiver atualizado!)

async function sendMessage(client) {
    client.on('message', async (message) => {
        // Responde a qualquer mensagem recebida
        await client.sendMessage(message.from, 'Olá! Sou um bot e recebi sua mensagem.');
    });

}
*/

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
