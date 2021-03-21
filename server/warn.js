module.exports = {
    name: 'warn',
    description: 'warn someone',
    execute(message) {
        const { Client, MessageEmbed } = require('discord.js');
        let reason = message.content.substring(28)
        let member = message.mentions.members.first();

        // If the author don't have perm
        if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send('You can\'t use that!');
        // If the bot don't have perm
        if(!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send('I don\'t have the right permissions.');
        // If the bot don't find the user
        if(!member) return message.channel.send('Can\'t seem to find this user.');
        // If he want to ban himself (witch he can't)
        if(member.id === message.author.id) return message.channel.send('You can\'t warn yourself');
        
        const embed = new MessageEmbed()
        // Set the title of the field
        .setTitle('Warned :warning:')
        // Set the color of the embed
        .setColor(0xff8b00)
        // Set the main content of the embed
        .setDescription(`${member} got warned by ${message.author}\n\nReason: **${reason}**`);
        // Send the embed to the same channel as the message
        message.channel.send(embed)
    } 
};