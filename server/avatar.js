module.exports = {
    name: 'pfp',
    description: 'Display your pfp or someone pfp.',
    execute(message) {
        if (!message.mentions.users.size) {
            return message.channel.send(`You profile picture is : ${message.author.displayAvatarURL({ format : 'png'})}`);
        }

         const avatarList = message.mentions.users.map(user => {
            return `${user.username} profile picture is : ${user.displayAvatarURL({ format : 'png' })}`;
         });

        message.channel.send(avatarList);
    } 
};