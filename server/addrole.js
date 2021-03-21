module.exports = {
    name: 'addrole',
    description: 'add a role',
    execute(message) {
        const { Client, MessageEmbed } = require('discord.js');
        let member = message.mentions.members.first();
        let askrole = message.content.substring(9 + member);
        let role = message.guild.roles.cache.find(r => r.name === askrole);

         // If the author don't have perm
         if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send('You can\'t use that!');
         // If the bot don't have perm
         if(!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send('I don\'t have the right permissions.');
         // If the bot don't find the user
         if(!member) return message.channel.send('Can\'t seem to find this user.');
         //If he bot dont find the role
         if(!role) return message.channel.send('Can\'t seem to find this role.');

        const embed = new MessageEmbed()
        // Set the title of the field
        .setTitle('Role Added!')
        // Set the color of the embed
        .setColor(0xff0000)
        // Set the main content of the embed
        .setDescription(`${message.author} added ${role} role to ${member}`);
      // Send the embed to the same channel as the message
        member.roles.add(role)
        message.channel.send(embed)      
    } 
};
