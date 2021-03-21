module.exports = {
    name: 'say',
    description: 'Say what you are saying',
    execute(message) {
        let say = message.content.substring(4);
        message.delete()
        message.channel.send(say)
    } 
};