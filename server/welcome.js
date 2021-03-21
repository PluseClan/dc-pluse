module.exports = {
    name: 'welcome',
    description: 'Welcome and guide to new member',
    execute(message) {
        const user = message.mentions.users.first();
          const member = message.guild.member(user);
          message.delete()
        message.channel.send(`Welcome ${member} to ${message.guild.name}\n Please read rules in <#${'805023576281448468'}>\n And also check <#${'801757379070263304'}> to give yourself some roles!`)
    } 
};