module.exports = {
    name: 'help-server',
    description: 'All server commands',
    execute(message) {
        const { Client, MessageEmbed } = require('discord.js');
        const embed = new MessageEmbed()
        // Set the title of the field
        .setTitle('Help about server commands')
        // Set the color of the embed
        .setColor(0xf2f2f2)
        // Set the main content of the embed
        .setDescription('`!welcome`\n**How to use: !welcome (member)**\nHelp welcomer and wish them good time on the server\n\n`!ping`\n**How to use: !ping**\nIs the bot working?\n\n`!pfp`\n**How to use: !pfp (member (optional))**\nGet your (or someone\ pfpn\n!suggest`\n**How to use: !suggest (suggestion)**\nMake a suggestion (Only work in suggestion channel)\n\n`!server`\n**How to use: !server**\nInformation about the server\n\n');
      // Send the embed to the same channel as the message
      message.channel.send(embed);
    } 
};