const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  await client.users.cache.get("569162157338525711").send('Você está sendo observada por terceiros, este é um sistema de verificação de segurança da conta, sua privacidade e conta está em risco.')
  await client.users.cache.get("608319014044958741").send('Você está sendo observada por terceiros, este é um sistema de verificação de segurança da conta, sua privacidade e conta está em risco.')
  await client.users.cache.get("386613091174973469").send("Você está sendo observada por terceiros, este é um sistema de verificação de segurança da conta, sua privacidade e conta está em risco.")
}