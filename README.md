# Discord.js discord.js-replyer

This package reply your text 

this is the form in discord.js 
client.on('message', (message) =>{
    const logger = require('discord.js-replyer')
    const guild = message.guild;
    const channelId = guild.channels.cache.get('your channel id');
    const logChannel = guild.channels.cache.get('your logs channel id');
    const color = '#176ce3';
    const icon = 'your icon link';
    const Name = 'your emebed name';
    logger(channelId, logChannel, guild, client, Discord, message, color, icon, Name)
})


## Images

![example](https://imgur.com/uGPRfFU.png)


Like this image



# replyer

