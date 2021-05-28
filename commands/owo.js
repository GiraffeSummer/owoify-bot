const owoify = require('../modifiers/owoify');
const webhook = require('../libraries/webhookify');
module.exports.config = {
    name: "owo",
    description: "owoify your message",
    usage: "owo {message}",
};

module.exports.run = async (bot, msg, args) => {
    webhook(msg, args.join(' '), owoify);
};
