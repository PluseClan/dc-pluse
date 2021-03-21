module.exports = {
    name: 'addrole',
    description: 'add a role',
    execute(message) {
        const { Client, MessageEmbed } = require('discord.js');
        let member = message.mentions.members.first();
        let askrole = message.content.substring(7);
        let role = message.guild.roles.cache.find(r => r.name === "askrole");
        
        message.channel.send(askrole)
    } 
};
