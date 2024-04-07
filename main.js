const { Client, LocalAuth, MessageMedia } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const fs = require('fs');
const path = require('path');

// Import the sendaudio and Message function
const { sendMedia } = require('./sendmedia.js');
const {sendMessage} = require('./sendmessage.js');

// Create a new client instance
const client = new Client({
    authStrategy: new LocalAuth({
        dataPath: "sessions",
    }),
    webVersionCache: {
        type: 'remote',
        remotePath: 'https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2412.54.html',
    }
});

// When the client is ready, run this code (only once)
client.on('ready', () => {
    console.log('Client is ready!');
});

// When the client received QR-Code
client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});


// Start your client
client.initialize();

// Function to handle sending audio
sendMedia(client);

// Chame a função sendMessage para lidar com o envio de mensagens
sendMessage(client);

