function Discord() {
  const Discord = require('discord.js');
  const { Intents } = require('discord.js');
  const dotenv = require('dotenv');
  dotenv.config();

  const client = new Discord.Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] 
  });
  
  
  client.login(process.env.TOKEN);
  
  client.on("ready", () => {
    console.log("bot is ready");
  });
  
  client.on("messageCreate", msg => {
    if(msg.content === "/teste"){
      msg.reply({
        content: "Funcionando"
      })
    }
  })
};

module.exports = Discord;