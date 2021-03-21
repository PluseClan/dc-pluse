module.exports = {
    name: 'nick',
    description: 'Change nick',
    execute(message) {
        let nick = message.content.substring(5);
        message.author.setNickname(nick)
    } 
};