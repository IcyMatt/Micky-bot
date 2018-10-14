const Discord = require('discord.js');
const botconfig = require('./botconfig.json');
const { Client, Attachment } = require('discord.js');
const client = new Client();
const fs = require('fs');
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

  jsfile.forEach((f, i) =>{
    let props = require(`./cmds/${f}`);
    console.log(`${f} loaded.`);
    client.commands.set(props.help.name, props);
  });

});


require('http').createServer().listen(3000)

client.on('ready', () => {
    console.log("Jesus Christ.");
})

client.on('message', message => {
  if (message.content === "%thass gay") {
    const attachment = new Attachment('https://78.media.tumblr.com/3a6be712212ba73401428d195eb09915/tumblr_o1wjdhiYaC1r9ee9go1_1280.png');
    message.channel.send(`${message.author}, Some true good shit.`, attachment);
}
});

client.on("ready", function() {
   console.log("4CT1V4T3D.");
   client.user.setActivity("Being Useless!");
});

client.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

if (cmd === `${prefix}botinfo`){

    let bicon = client.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("__**Bot information:**__")
    .setColor("#18D1FA")
    .setThumbnail(bicon)
    .addField("**Bot name:**", client.user.username)
    .addField("**Created on:**", client.user.createdAt);

    return message.channel.send(botembed);
}

    if(cmd === `${prefix}serverinfo`){

        let sicon = message.guild.displayAvatarURL;
        let serverembed = new Discord.RichEmbed()
        .setDescription("__**Server information:**__")
        .setColor("#28FD75")
        .setThumbnail(sicon)
        .addField("**Server name:**", message.guild.name)
        .addField("**Created on:**", message.guild.createdAt)
        .addField("**Total members.**", message.guild.memberCount);

        return message.channel.send(serverembed);
    }

});



client.login(process.env.token);
