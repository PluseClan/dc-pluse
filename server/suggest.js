module.exports = {
    name: 'suggest',
    description: 'Suggestions',
    execute(message) {
        let sendMessage = message.content.substring(8);
        message.delete()
        message.reply(`have a suggestion:\n**${sendMessage}** <@&802166467247865927>`).then(async m => {
            await m.react('👍');
            m.react('👎');
        })
    } 
};