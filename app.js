const Discord = require('discord.js');
const config = require('./config.json');
const ffmpeg = require('ffmpeg');
const bot = new Discord.Client();
var prefix = '?';

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);
})

bot.on('message', msg => {
    if (msg.author.bot || !msg.content.startsWith(prefix)) {
        return;
    } else {
        var command = msg.content.split('?').filter(word => word != '')[0];
        switch (command) {
            case 'ping':
                msg.channel.sendMessage('伺服器延遲為： `' + `${Date.now() - msg.createdTimestamp}` + ' ms`');
                break;
            case 'voice':
                msg.channel.sendMessage('voice ready');
                break;
            case 'hey':
                msg.channel.sendMessage('Welcome To This Channel');
                break;
            case 'join':
                bot.channels.find('name', 'music').join();
                break;
            default:
                msg.channel.sendMessage('Default Message');
        }
    }
});

bot.login(config.token);