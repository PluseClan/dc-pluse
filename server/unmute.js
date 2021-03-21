module.exports = {
    name: 'unmute',
    description: 'Add a muted role',
    execute(message) {
        const { Client, MessageEmbed } = require('discord.js');
        let role = message.guild.roles.cache.find(r => r.name === "Muted");
        let member = message.mentions.members.first();
        const embed = new MessageEmbed()
        // Set the title of the field
        .setTitle('Mute')
        // Set the color of the embed
        .setColor(0xff0000)
        // Set the main content of the embed
        .setDescription(`${member} got muted by ${message.author}`);
      // Send the embed to the same channel as the message
        message.delete()
        member.roles.remove(role)
        message.channel.send(embed)      
    } 
};