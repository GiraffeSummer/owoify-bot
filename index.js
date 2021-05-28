require("dotenv").config();
const Discord = require("discord.js");

const bot = new Discord.Client(/*{ ws: { intents: Discord.Intents.ALL } }*/);
bot.commands = new Discord.Collection();

//Added useful functions to bot
require("./libraries/functions")(bot);

//Loads each command in "commands" folder
bot.loadCommands();


bot.on('message', (message) => {
    if (message.author.bot || message.webhookID || message.channel.type === "dm") return; //if bot, webhook or dm -> skip

    const mention = "<@!" + bot.user.id + ">";
    const prefix = "<";

    if (!message.content.startsWith(prefix) && !message.content.startsWith(mention)) return;
    const length = message.content.startsWith(prefix) ? prefix.length : mention.length;

    const args = message.content.slice(length).split(" ");
    if (args[0] === "") args.shift();
    if (args.length < 1) return;

    const commandName = args.shift().toLowerCase();
    const command =
        bot.commands.get(commandName) ||
        bot.commands.find((c) => c.config.aliases && c.config.aliases.includes(commandName));

    if (command) command.run(bot, message, args);
})

bot.login(process.env.TOKEN);