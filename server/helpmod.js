module.exports = {
    name: 'help-mod',
    description: 'All commands',
    execute(message) {
        const { Client, MessageEmbed } = require('discord.js');
        const embed = new MessageEmbed()
        // Set the title of the field
        .setTitle('Help about moderation')
        // Set the color of the embed
        .setColor(0xff0000)
        // Set the main content of the embed
        .setDescription('`!mute`\n**How to use: !mute (member) (reason)**\nAdd the muted role to a member\n\n`!unmute`\n**How to use: !unmute (member)**\nRemove the muted role to a member\n\n`!kick`\n**How to use: !kick (member) (reason)**\nKick a member\n\n`!ban`\n**How to use: !ban (member) (reason)**\nBan a member\n\n`!purge`\n**How to use: !purge (amount)**\nDelete a certain amount of message');
      // Send the embed to the same channel as the message
      message.channel.send(embed);
    } 
};