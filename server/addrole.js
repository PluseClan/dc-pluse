module.exports = {
    name: 'addrole',
    description: 'add a role',
    execute(message) {
        const { Client, MessageEmbed } = require('discord.js');
        let member = message.mentions.members.first();
        let askrole = message.content.substring(9 + member);
        let role = message.guild.roles.cache.find(r => r.name === askrole);
        
        message.channel.send(role)
        message.channel.send(askrole)
    } 
};
