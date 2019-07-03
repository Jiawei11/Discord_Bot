const Discord = require('discord.js');
const config = require('./config.json');
const bot = new Discord.Client();
var prefix = '?';

bot.on('ready', () => {
    console.log('Discord Bot Ready');
})

bot.on('message', msg => {
    if (msg.content == "嗨") {
        msg.channel.sendMessage('嗨');
    }
})

bot.on('message', message => {
    if (message.author.bot || !message.content.startsWith(prefix)) {
        return;
    } else {
        switch (message.content.split('?').filter(word => word != '')[0]) {
            case 'ping':
                message.channel.sendMessage('伺服器延遲為： `' + `${Date.now() - message.createdTimestamp}` + ' ms`');
                break;
            case 'voice':
                message.channel.sendMessage('Voice');
                break;
            default:
                message.channel.sendMessage('Default Message');
        }
    }
});

bot.login(config.token);