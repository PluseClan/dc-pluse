module.exports = {
    name: 'addrole',
    description: 'Add a role',
    execute(message) {
        const { Client, MessageEmbed } = require('discord.js');
        let askedrole = message.content.substring(31);
        let myRole = message.guild.roles.cache.find(role => role.name === askedrole);
        let member = message.mentions.members.first();
        
        // If the author don't have perm
        if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send('You can\'t use that!');
        // If the bot don't have perm
        if(!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send('I don\'t have the right permissions.');
        // If the bot don't find the user
        if(!member) return message.channel.send('Can\'t seem to find this user.');
        
        const embed = new MessageEmbed()
        // Set the title of the field
        .setTitle('addrole test')
        // Set the color of the embed
        .setColor(0xff0000)
        // Set the main content of the embed
        .setDescription(`**Did it worked lol**`);
        // Send the embed to the same channel as the message
        message.delete()
        member.roles.add(myRole)
        message.channel.send(embed)      
    } 
};
