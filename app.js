const Discord = require('discord.js');
const config = require('./config.json');
const bot = new Discord.Client();
var prefix = '?';

bot.on('ready', () => {
    console.log('Discord Bot Ready');
})

bot.on('message', msg => {
    if (msg.author.bot || !msg.content.startsWith(prefix)) {
        return;
    } else {
        var command = msg.content.split('?').filter(word => word != '')[0];

        // console.log(bot.users.find("username", "家偉"));
        switch (command) {
            case 'ping':
                msg.channel.sendmsg('伺服器延遲為： `' + `${Date.now() - msg.createdTimestamp}` + ' ms`');
                break;
            case 'voice':
                msg.channel.sendmsg('voice ready');
                break;
            case 'hey':
                msg.channel.sendMessage('Welcome To This Channel');
                break;
            default:
                msg.channel.sendMessage('Default Message');
        }
    }
});

bot.login(config.token);