const Discord = require('discord.js');

exports.run = async (client, message, args) => {

let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Regras')
        .setColor('#000000')
        .setDescription(`➥[Regras Shinobi Striker]

━━━━━━━━━━━━━━━━━━━
•➤  Preconceito contra alguem, racismo, religião ou homossexual.

- Especifique se for uma Zuera e coloque as aspas para dizer que foi ironia, caso tenha fobia por exemplo homofobia , Racismo e etc guarde para si mesmo e não espalhe ódio gratuito. O servidor do discord tem disponibilidade para qualquer pessoa, indiferentemente da etnia, sexualidade, etc. Isso resultaria em Mute e Warn. 

━━━━━━━━━━━━━━━━━━━
•➤  Sem pornografia.

- Qualquer tipo de pornografia resultara em Mute e Warn. 
 
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
•➤   Ofender membros.

-  Ofenda apenas se for necessário não espalhe ódio gratuito isso leva a warn. 

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
•➤  Piadas de humor negro.

-  Mesmo que seja Zuera ou ironia resulta em ban.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
•➤  Ofender a equipe Staff.

-  Demonstre se for ironia ou zuera, a punição resultara em warn.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
•➤  Evite spam.

-   Mensagens repetidas atrapalham o chat, por favor, tenha bom senso! Resulta em mute.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
•➤  Compartilhamento de Pornografia.

-    É extremamente proibido qualquer compartilhamento de pornografia, seja Imagem , foto, vídeo, link, etc...

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

•➤  Não marque atoa alguém.

-    É irritante principalmente para um staff, marque com intenção sobre alguma duvida algo do tipo.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
•➤  Estourar áudio.

-    Não estourar o áudio na call com um bot de música ou com seu próprio fone, isso é muito irritante e chato, quem fizer isso vai levar warn ou até mute.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`)
        .setImage()
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Shinobi Striker RP/ERP')
        .setAuthor(message.author.tag, avatar);
   await message.channel.send(embed);
}