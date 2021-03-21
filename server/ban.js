module.exports = {
    name: 'ban',
    description: 'Ban a member',
    execute(message) {
        const { Client, MessageEmbed } = require('discord.js');
        let member = message.mentions.members.first();
        let reason = message.content.substring(28, member);
        // If the author don't have perm
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('You can\'t use that!');
        // If the bot don't have perm
        if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('I don\'t have the right permissions.');
        // If the bot don't find the user
        if(!member) return message.channel.send('Can\'t seem to find this user. Sorry \'bout that :/');
        // If he can't ban the user
        if(!member.bannable) return message.channel.send('This user can\'t be banned. It is either because they are a mod/admin, or their highest role is higher than mine');
        // If he want to ban himself (witch he can't)
        if(member.id === message.author.id) return message.channel.send('Bruh, you can\'t ban yourself!');
        const embed = new MessageEmbed()
        // Set the title of the field
        .setTitle('Ban :hammer:')
        // Set the color of the embed
        .setColor(0xff0000)
        // Set the main content of the embed
        .setDescription(`${message.author} banned ${member} from the server\n\nReason:**${reason}**`);
        // Send the embed to the same channel as the message
        message.delete()
        member.ban()
        message.channel.send(embed)      
    } 
};