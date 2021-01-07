/**
 * Logs an action in an embed.
 * @param {} channelId The channel to send the resolts
 * @param {} logChannel The channel to log to.
 * @param {string} guild The guild the action hapenned
 * @param {string} client Pass the client of the bot
 * @param {string} Discord Pass the discord of the bot
 * @param {string} message Pass the message of the guild
 * @param {string} color Pass the color for the embed
 * @param {string} icon Pass the icon for the embed
 * @param {string} Name Pass the name for the embed
 */
module.exports = async (channelId, logChannel, guild, client, Discord, message, color, icon, Name) => {
    const color2 = require('ansi-colors');
    if(channelId) {
        if(logChannel) {
            if (!message.author.bot) {
                if (message.member) {
                    if (message.channel.id == channelId) {
                        const Attatchment = (message.attachments)
                        if (!Attatchment.array()[0]) {
                            setTimeout(async function() {
                                message.delete();
                            }, 1200) 
                        }
                        const embed2 = new Discord.MessageEmbed()
                        .setAuthor(message.author.tag, message.author.avatarURL())
                        .setDescription(message.content)
                        .setFooter(Name, icon)
                        .setTimestamp()
                        .setColor(color)
                        if (!Attatchment.array()[0]){
                            console.log(`I send a message on this channels ==> { ${channelId} }   +    { ${logChannel} }`)
                            message.channel.send(embed2);
                        }
                        const embed = new Discord.MessageEmbed()
                        .setAuthor(message.author.tag, message.author.avatarURL())
                        .setTitle(`Logs of ${channelId.name}`)
                        .setDescription(`${message.author} send { ${message.content} }`)
                        .setTimestamp()
                        .setColor('#ff0000')
                        if(!Attatchment.array()[0]) console.log(`I send an Attatchment on this channels ==> { ${channelId} }   +    { ${logChannel} }`)
                        if (!Attatchment.array()[0]) return logChannel.send(embed);

                        if (Attatchment){
                            console.log(`I send an Attatchment on this channels ==> { ${channelId} }   +    { ${logChannel} }`)
                            setTimeout(async function() {
                                message.delete();
                            }, 1000) 
                            const embed = new Discord.MessageEmbed()
                            .setAuthor(message.author.tag, message.author.avatarURL())
                            .setDescription(message.content)
                            .setImage(Attatchment.array()[0].url)
                            .setFooter(Name, icon)
                            .setTimestamp()
                            .setColor(color)
                            message.channel.send(embed);
                        }

                        if (Attatchment) {
                            const embed2 = new Discord.MessageEmbed()
                            .setAuthor(message.author.tag, message.author.avatarURL())
                            .setTitle(`Logs of ${channelId.name}`)
                            .setDescription(`${message.author} send { ${message.content} }`)
                            .setImage(Attatchment.array()[0].url)
                            .setTimestamp()
                            .setColor('#ff0000')
                            logChannel.send(embed2);
                            console.log(`I send an Attatchment on this channels ==> { ${channelId} }   +    { ${logChannel} }`)
                        }
                    }
                }
            }
        }  
    }
}