const fs = require('fs');

const Discord = require('discord.js');

const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./server').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./server/${file}`, `./mod/${file}`);
    client.commands.set(command.name, command)
}

client.once('ready', () => {
    console.log('ready!');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) return;
    
    try {
        client.commands.get(command).execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('This command does not exist,please try again later or contact a staff member.');
        }
    }
)

client.login(process.env.TOKEN);