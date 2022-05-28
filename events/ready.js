const Discord = require("discord.js");
const config = require('../config.json');
module.exports = client => {
  console.log(``);  

  var prefix = config.prefix;

client.user.setActivity(`Very soon! ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} online!`, {
  type: "STREAMING",
  url: "https://www.twitch.tv/elraenn"
  });
};

// Type kısımları:
// WATCHING - İZLİYOR
// PLAYING - OYNUYOR
// LISTENING - DİNLİYOR

// Status kısımları:
// online - çevrim içi
// idle - boşta
// dnd - rahatsız etmeyin

// name kısmına oynuyorunuzu yazabilirsiniz.
