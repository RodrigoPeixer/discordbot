function Discord() {
  const { Client, Intents } = require('discord.js');
  const dotenv = require('dotenv');
  dotenv.config();

  const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] 
  });
  
  
  client.once("ready", () => {
    console.log("bot is ready");
  });
  
  
  client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;
    
    const { commandName } = interaction;
    console.log(commandName)
  
    if (commandName === 'ping') {
      await interaction.reply('Pong!');
    } else if (commandName === 'server') {
      await interaction.reply('Server info.');
    } else if (commandName === 'user') {
      await interaction.reply('User info.');
    }else if (commandName === 'testando') {
      await interaction.reply('for two day')
    }
  });


  client.login(process.env.TOKEN);
};

module.exports = Discord;