const webhook = require('../libraries/webhookify');
const sup = require('../modifiers/super');
module.exports.config = {
    name: "super",
    description: "turn your message into superscript",
    usage: "super {message}",
    aliases: ['sup']
};

module.exports.run = async (bot, msg, args) => {
    webhook(msg, args.join(' '), sup);
};
