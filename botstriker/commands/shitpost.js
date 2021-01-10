const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
 'https://cdn.discordapp.com/attachments/776943473558814731/796470752890454026/shitposts.br_-20210106-0001.mp4',
 'https://cdn.discordapp.com/attachments/776943473558814731/796470753267548170/galista_shitpost-20210106-0001.mp4',
 'https://cdn.discordapp.com/attachments/776943473558814731/796470753628389416/SPOILER_GameplayFodA.mp4',
'https://cdn.discordapp.com/attachments/776943473558814731/796470754069184596/shitposts.br_-20210105-0003.mp4',
'https://cdn.discordapp.com/attachments/776943473558814731/796470754602385448/xhitpost-20210105-0010.mp4',
'https://cdn.discordapp.com/attachments/776943473558814731/796470755083681802/xhitpost-20210105-0009.mp4',
'https://cdn.discordapp.com/attachments/776943473558814731/796470755427745803/xhitpost-20210105-0006.mp4',
'https://cdn.discordapp.com/attachments/776943473558814731/796470755722002492/xhitpost-20210105-0007.mp4',
'https://cdn.discordapp.com/attachments/776943473558814731/796470756040376320/xhitpost-20210105-0008.mp4',
'https://cdn.discordapp.com/attachments/776943473558814731/796470756301078578/xhitpost-20210105-0004.mp4',
'https://cdn.discordapp.com/attachments/776943473558814731/796470911204065360/xhitpost-20210105-0005.mp4',
'https://cdn.discordapp.com/attachments/776943473558814731/796470911560974336/xhitpost-20210105-0002.mp4',
'https://cdn.discordapp.com/attachments/776943473558814731/796470911875809341/xhitpost-20210105-0003.mp4',
'https://cdn.discordapp.com/attachments/776943473558814731/796470912555810886/shitposts.br_-20210105-0002.mp4',
'https://cdn.discordapp.com/attachments/776943473558814731/796470913587478538/oreidoshitposts-20210105-0001.mp4',
'https://cdn.discordapp.com/attachments/776943473558814731/796470913587478538/oreidoshitposts-20210105-0001.mp4',
'https://cdn.discordapp.com/attachments/776943473558814731/796470914391736381/shitposts.br_-20210105-0001.mp4',
'https://cdn.discordapp.com/attachments/776943473558814731/796471048467120128/galista_shitpost-20210105-0005.mp4',
'https://cdn.discordapp.com/attachments/776943473558814731/796471049356967946/galista_shitpost-20210105-0001.mp4',
'https://cdn.discordapp.com/attachments/776943473558814731/796471049725935676/galista_shitpost-20210105-0002.mp4',
'https://cdn.discordapp.com/attachments/776943473558814731/796471050014556210/galista_shitpost-20210105-0003.mp4',
'https://cdn.discordapp.com/attachments/776943473558814731/796471050308681728/so_canela_-20210105-0001.mp4',
'https://cdn.discordapp.com/attachments/776943473558814731/796471151382495262/ilha_shitpost-20210105-0015.mp4',
'https://cdn.discordapp.com/attachments/776943473558814731/796471152347447326/ilha_shitpost-20210105-0016.mp4',
'https://cdn.discordapp.com/attachments/776943473558814731/796471153886494730/ilha_shitpost-20210105-0014.mp4',
'https://cdn.discordapp.com/attachments/776943473558814731/796471155429998602/ilha_shitpost-20210105-0009.mp4',
'https://cdn.discordapp.com/attachments/776943473558814731/796471308644646932/ilha_shitpost-20210105-0007.mp4',
'https://cdn.discordapp.com/attachments/776943473558814731/796471309596229632/ilha_shitpost-20210105-0006.mp4',
'https://cdn.discordapp.com/attachments/776943473558814731/796471309952352276/ilha_shitpost-20210105-0004.mp4',
'https://cdn.discordapp.com/attachments/776943473558814731/796471312981295121/oreidoshitposts-20210103-0001.mp4',
'https://cdn.discordapp.com/attachments/776943473558814731/796471313434411058/120480493_383560229695553_3061150951492622368_n-1.mp4',
'https://cdn.discordapp.com/attachments/776943473558814731/796591770157711422/rato_arabic0-20210107-0005.mp4',
'https://cdn.discordapp.com/attachments/776943473558814731/796591771034451968/rato_arabic0-20210107-0004.mp4',
'https://cdn.discordapp.com/attachments/776943473558814731/796591771781300224/rato_arabic0-20210107-0003.mp4',
'https://cdn.discordapp.com/attachments/776943473558814731/796591772075425822/rato_arabic0-20210107-0002.mp4',
'https://cdn.discordapp.com/attachments/776943473558814731/796741874684657684/pernalongacomunistakkk-20210107-0001.mp4',
'https://cdn.discordapp.com/attachments/776943473558814731/796741875071189022/mb.lixov3-20210107-0001.jpg',
'https://cdn.discordapp.com/attachments/776943473558814731/796742299215200256/oreidoshitposts-20210106-0003.jpg',
'https://cdn.discordapp.com/attachments/699372083209044008/796804825320915024/videoplayback_15.mp4',
'https://cdn.discordapp.com/attachments/699372083209044008/796805368063590480/videoplayback_16.mp4',
'https://cdn.discordapp.com/attachments/776943473558814731/796906812560900106/kirito_arabic0-20210107-0001.mp4',
'https://cdn.discordapp.com/attachments/776943473558814731/796906812867739679/shitpost.do.lee-20210107-0001.mp4',

];

var rand = list[Math.floor(Math.random() * list.length)];

await message.channel.send(rand)

}