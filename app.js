const Discord = require('discord.js');
const config = require('./config.json');
const bot = new Discord.Client();
var prefix = '?';

bot.on('ready', () => {
    console.log('Bot Starting： ' + bot.user.tag);
})

bot.on('message', msg => {
    if (msg.content == "嗨") {
        msg.channel.sendMessage('嗨');
    }
})

bot.on('message', message => {
    if (message.author.bot || !message.content.startsWith(prefix)) {
        return;
    } else if (message.content.startsWith(prefix + 'ping')) {
        message.channel.sendMessage('伺服器延遲為： `' + `${Date.now() - message.createdTimestamp}` + ' ms`');
    }
});

bot.login(config.token);