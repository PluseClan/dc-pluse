module.exports = {
    name: 'addrole',
    description: 'Add a role',
    execute(message) {
        const { Client, MessageEmbed } = require('discord.js');
        let askedrole = message.content.substring(31);
        message.channel.send(askedrole)      
    } 
};
