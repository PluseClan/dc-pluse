module.exports = {
    name: 'server',
    description: 'Server Information.',
    execute(message) {
        message.delete()
        message.channel.send(`Server name: ${message.guild.name}\n Numbers of users : ${message.guild.memberCount}`)
    } 
};