module.exports = {
    name: 'help',
    description: 'All commands',
    execute(message) {
        const { Client, MessageEmbed } = require('discord.js');
        const embed = new MessageEmbed()
        // Set the title of the field
        .setTitle('Did someone said "help"?')
        // Set the color of the embed
        .setColor(0xff0000)
        // Set the main content of the embed
        .setDescription('`!help-mod`\n**For help about moderation commands**\n\n`!help-server`\n**For help about server commands**\n\n`!help-fun`\n**For help about fun commands SOON**');
      // Send the embed to the same channel as the message
      message.channel.send(embed);
    } 
};