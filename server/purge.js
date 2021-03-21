module.exports = {
    name: 'purge',
    description: 'Delete message',
    execute(message, args) {
        const amount = parseInt(args[0]) + 1;
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('You can\'t use that!');

        if (isNaN(amount)) {
            return message.reply("This is not a valid number.")
        }
        else if (amount <= 1 || amount > 100) {
            return message.reply("This is not a valid number.You can delete between 1 and 99 messages only.");
        }

        message.channel.bulkDelete(amount)
        .then(messages => console.log(`${messages.size - 1} message were deleted.`))
        return message.reply(`${amount} messages were deleted successfully.`)
    } 
};