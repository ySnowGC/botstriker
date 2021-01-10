const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://imgur.com/iclUiUN.gif',
  'https://imgur.com/lYQt9rx.gif',
  'https://imgur.com/w1TU5mR.gif',
'https://c.tenor.com/F02Ep3b2jJgAAAAM/cute-kawai.gif',
'https://c.tenor.com/wDYWzpOTKgQAAAAM/anime-kiss.gif',
'https://c.tenor.com/_ttVgUDKJL0AAAAM/anime-couple.gif',
'https://c.tenor.com/Yu2a1FmxFK8AAAAM/love-sweet.gif',
'https://c.tenor.com/9rN8nw7pVcEAAAAM/anime-kiss.gif',
'https://c.tenor.com/HgV0doOr_YoAAAAM/golden-time-anime.gif',
'https://c.tenor.com/I8kWjuAtX-QAAAAM/anime-ano.gif',
'https://c.tenor.com/PZ1Hgp2WUxMAAAAM/anime-kiss.gif',
'https://c.tenor.com/0mdCwkmGD1oAAAAM/kiss-love.gif',
'https://c.tenor.com/QxqH61RlcogAAAAM/first-kiss-naruto.gif',
'https://images-ext-1.discordapp.net/external/cp3pJFfMjuEWlHE8Oot_3edKtVUiBFkKi9fcnfITAzA/https/loritta.website/assets/img/actions/kiss/female_x_male/gif_384.gif',

];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para beijar!');
}

let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Kiss')
        .setColor('#000000')
        .setDescription(`${message.author} Beijou ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Shinobi Striker RP/ERP')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}