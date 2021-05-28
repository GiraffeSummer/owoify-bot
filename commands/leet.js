const leet = require('../modifiers/leetify');
const webhook = require('../libraries/webhookify');
module.exports.config = {
    name: "leet",
    description: "leetify your message",
    usage: "leet {message}",
};

module.exports.run = async (bot, msg, args) => {
    webhook(msg, args.join(' '), leet);
};
