module.exports = {
    name: 'unban',
    description: 'Say what you are saying',
    execute(message) {
        const { Client, MessageEmbed } = require('discord.js');
        let userid = message.content.substring(6)
        message.guild.members.unban(userid)
        const embed = new MessageEmbed()
        // Set the title of the field
        .setTitle('Unban :flushed:')
        // Set the color of the embed
        .setColor(0xff0000)
        // Set the main content of the embed
        .setDescription(`${message.author} unbanned ${userid} from the server`);
        // Send the embed to the same channel as the message
        message.channel.send(embed)
    } 
};