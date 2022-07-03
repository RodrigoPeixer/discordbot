const express = require('express');
const app = express();
const Discord = require('./discordbot');

Discord();

app.listen(3000, () => {
  console.log('Servering at localhost/3000');
});