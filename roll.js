const Discord = require("discord.js");
const botconfig = require('./botconfig.json');
const client = new Discord.Client();

client.on('message', (message) => {
  const messageWords = message.content.split(' ');
  const rollFlavor = messageWords.slice(2).join(' ');
  if (messageWords[0] === '%roll') {
    if (messageWords.length === 1) {
      
      return message.reply(
        (Math.floor(Math.random() * 6) + 1) + ' ' + rollFlavor
      );
    }

    let sides = messageWords[1];
    let rolls = 1;
    if (!isNaN(messageWords[1][0] / 1) && messageWords[1].includes('d')) {

      rolls = messageWords[1].split('d')[0] / 1;
      sides = messageWords[1].split('d')[1];
    } else if (messageWords[1][0] == 'd') {

      sides = sides.slice(1);
    }
    sides = sides / 1;
    if (isNaN(sides) || isNaN(rolls)) {
      return;
    }
    if (rolls > 1) {
      const rollResults = [];
      for (let i = 0; i < rolls; i++) {
        rollResults.push(Math.floor(Math.random()*sides)+1);
      }
      const sum = rollResults.reduce((a,b) => a + b);
      return message.reply(`[${rollResults.toString()}] ${rollFlavor}`);
    } else {
      return message.reply(
        (Math.floor(Math.random() * sides) + 1) + ' ' + rollFlavor
      );
    }
  }
});

client.login(process.env.token);

module.exports.run = async (bot, message, args) => {
  console.log("Yo!");
}

module.exports.help = {
  name: "roll"
}
