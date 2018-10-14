const Discord = require('discord.js');
const botconfig = require('./botconfig.json');
const { Client, Attachment } = require('discord.js');
const client = new Client();
const fs = require('fs');
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();


const prefix = "%";

client.user.setActivity("Being Useless!");

require('http').createServer().listen(3000);



client.on('message', message => {
    
    msg = message.content.toLowerCase();

    if (message.author.bot) return;
    
    if (message.content (prefix + "thassgay")) {
        const attachment = new Attachment('https://78.media.tumblr.com/3a6be712212ba73401428d195eb09915/tumblr_o1wjdhiYaC1r9ee9go1_1280.png');
        message.channel.send(`${message.author}, Some true good shit.`, attachment);


    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if (msg.startsWith (prefix + 'botinfo')){
        let bicon = bot.user.displayAvatarURL;
        let botembed = new Discord.RichEmbed()
        .setDescription("__**Bot information:**__")
        .setColor("#18D1FA")
        .setThumbnail(bicon)
        .addField("**Bot name:**", bot.user.username)
        .addField("**Created on:**", bot.user.createdAt);

        return message.channel.send(botembed);
    }

    if(msg.startsWith (prefix + 'serverinfo')){
        let sicon = message.guild.displayAvatarURL;
        let serverembed = new Discord.RichEmbed()
        .setDescription("__**Server information:**__")
        .setColor("#28FD75")
        .setThumbnail(sicon)
        .addField("**Server name:**", message.guild.name)
        .addField("**Created on:**", message.guild.createdAt)
        .addField("**Total members.**", message.guild.memberCount);

        return message.channel.send(serverembed);
    };

}
});

client.login(process.env.token);