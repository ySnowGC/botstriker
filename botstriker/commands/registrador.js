const Discord = require('discord.js');

exports.run = async (client, message, args) => {

if (!message.member.roles.cache.some(r => [
  "722398155085316156",

].includes(r.id))) {
  return message.channel.send(" Comandos só pode ser utilizado por pessoas sem registro.")
  
} else if (message.content.includes("registrador")) {
  await message.channel.send("Mensagem enviada para registradores com sucesso")

client.users.cache.get("563504857747816472").send('oi adm')
client.users.cache.get("608319014044958741").send("Há usuários querendo ser registrados.")
client.users.cache.get("365695328726286336").send("Há usuários querendo ser registrados.")
client.users.cache.get("386613091174973469").send("Há usuários querendo ser registrados.")
client.users.cache.get("232657016613634048").send("Há usuários querendo ser registrados.")
client.users.cache.get("668521599346933800").send("Há usuários querendo ser registrados.")
client.users.cache.get("563504857747816472").send("Há usuários querendo ser registrados.")
}}
