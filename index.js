const { Discord, Client, Intents, Collection } = require('discord.js')
require('dotenv').config()

const client = new Client({
    intents: new Intents('32767')
})

client.on('ready', () => {
    console.log('The bot is ready')
});

client.on('messageCreate', (message) => {
    if (message.content === '!hello') {
        message.reply({
            content: 'Hello!'
        })
    }
})

client.login(process.env.TOKEN)