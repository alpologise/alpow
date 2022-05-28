const Discord = require("discord.js"),
client = new Discord.Client();

module.exports.run = async (client, message, args) => {

    const embed = new Discord.MessageEmbed()
      .setTitle("Resurrection Staff 114")
      .setColor("RANDOM")
      .setThumbnail("https://images-ext-1.discordapp.net/external/13z6g4N4783HdjRlmWkxUY-7q0vmE0SQXHjbzO7h1ME/https/cdn.discordapp.com/emojis/622681759880052757.png")
      .setDescription(`İstatistikler:
      <:stat3wp:979716952866058250> WP Cost: 300, <:stat2mag:979716892514197534> Revived Health: 80%

      Ölü bir müttefiki diriltir. MAG'nizin %50-80'i kadar iyileştirir.

      Önerilen pasifler: <:PSwgen:979719009303920680> <:PSmag:979718971953655968>

      Petlerde en iyi kullanım: <:stat3wp:979716952866058250> ve <:stat2mag:979716892514197534> dengeli, <a:L1squid:979719376548790304> gibi hayvanlar.

      **İstatistiklerin %100 aynı olmasına gerek yoktur. Yakın olması da yeterlidir.**`);
    message.channel.send(embed);

};

exports.config = {
  name: "resurrectionstaff",
  guildOnly: true,
  aliases: ["Resurrectionstaff","Rs","rs","114"],
};