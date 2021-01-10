
const Discord = require("discord.js"); 
const client = new Discord.Client(); 
const config = require("./config.json"); 

client.on('message', message => {
     if (message.author.bot) return;
     if (message.channel.type == 'dm') return;
     if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
     if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

    const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        const commandFile = require(`./commands/${command}.js`)
        commandFile.run(client, message, args);
    } catch (err) {
    console.error('Erro:' + err);
  }
  

    });

    
 client.on('ready', () => {
   client.user.setActivity('Shinobi Striker RP/ERP #1500', { type: 'WATCHING' })
 })






client.login(config.token); 

