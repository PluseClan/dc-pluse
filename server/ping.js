module.exports = {
    name: 'ping',
    description: 'Test ping',
    execute(message) {
        message.delete()
        message.channel.send('Pong!')
    } 
};