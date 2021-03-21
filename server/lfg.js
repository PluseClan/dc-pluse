module.exports = {
    name: 'lfg',
    description: 'Test ping',
    execute(message) {
        let need = message.content.substring(5);
        message.channel.send(`${message.author} want to play **${need}** <@&801793303937941505>`)
    } 
};
