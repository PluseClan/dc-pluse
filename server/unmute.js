module.exports = {
    name: 'unmute',
    description: 'Add a muted role',
    execute(message) {
        const { Client, MessageEmbed } = require('discord.js');
        let role = message.guild.roles.cache.find(r => r.name === "Muted");
        let member = message.mentions.members.first();

         // If the author don't have perm
         if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send('You can\'t use that!');
         // If the bot don't have perm
         if(!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send('I don\'t have the right permissions.');
         // If the bot don't find the user
         if(!member) return message.channel.send('Can\'t seem to find this user.');

        const embed = new MessageEmbed()
        // Set the title of the field
        .setTitle('Unmute')
        // Set the color of the embed
        .setColor(0xff0000)
        // Set the main content of the embed
        .setDescription(`${member} got unmuted by ${message.author}`);
      // Send the embed to the same channel as the message
        message.delete()
        member.roles.remove(role)
        message.channel.send(embed)      
    } 
};