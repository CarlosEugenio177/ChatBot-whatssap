/*  FUNÇÃO NATIVA DE AUDIO COMENTADA 
    OBS: USE POR CONTA E RISCO!
const fs = require('fs');
const path = require('path');
const { MessageMedia } = require('whatsapp-web.js');

async function sendaudio(client) {
    client.on('message_revoke_everyone', async (after, before) => {
        if (before) {
            const audioPath = path.join(__dirname, '.mp3'); // Assuming meme.mp3 is in the same directory as sendaudio.js

            try {
                if (fs.existsSync(audioPath)) {
                    console.log('Arquivo de áudio encontrado:', audioPath);

                    const audioData = fs.readFileSync(audioPath, { encoding: 'base64' });
                    const mimetype = 'audio/mp3';
                    const filename = '.mp3';
                    const filesize = fs.statSync(audioPath).size;

                    const audioMedia = new MessageMedia(mimetype, audioData, filename, filesize);

                    // Send the audio as a reply to the message before it was deleted
                    await before.reply(audioMedia);
                    console.log('Áudio enviado com sucesso!');
                } else {
                    console.error('O arquivo de áudio não foi encontrado.');
                    await before.react('❌');
                }
            } catch (error) {
                console.error('Erro ao enviar o áudio:', error);
            }
        }
    });
}

module.exports = { sendaudio };
*/

const fs = require('fs');
const path = require('path');
const { Client, MessageMedia } = require('whatsapp-web.js');

// Defina a função sendMedia que será exportada
async function sendMedia(client) {
    // O cliente já foi inicializado antes de chamar esta função na main.js

    // Ouvindo o evento de criação de mensagens de imagem!
    client.on('message_create', async (msg) => {
        if (msg.body === '!EXEMPLO') {
            // Envia a imagem 'provas.jpg'
            const media = MessageMedia.fromFilePath(path.join(__dirname, 'EXEMPLO.jpg'));
            await client.sendMessage(msg.from, media);
        } else if (msg.body === '!EXEMPLO_2') {
            // Envia a imagem 'horario.jpg'
            const horario = MessageMedia.fromFilePath(path.join(__dirname, 'EXEMPLO_2.jpg'));
            await client.sendMessage(msg.from, horario);
        }
    });
}



// Exporta a função sendMedia para que possa ser importada em outros arquivos
module.exports = { sendMedia };

