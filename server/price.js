module.exports = {
    name: 'price',
    description: 'Ping Pricer',
    execute(message) {
        let sendMessage = message.content.substring(6);
        message.delete()
        message.reply(`**want to know the price of${sendMessage} for switch!** <@&801783343242018848> <@&808268171873484842>`);
    } 
};