module.exports = (msg, text, modifier = (s) => { return s }) => {
    if (text.length < 1) return;
    msg.delete();
    msg.channel.createWebhook(msg.member.displayName, {
        avatar: msg.author.displayAvatarURL({ dynamic: true })
    }).then(webhook => {
        webhook.send(modifier(text)).then(response => {
            webhook.delete('').catch(err => { console.log(err) })
        }).catch(err => { console.log(err) })
    }).catch(err => { console.log(err) })
}