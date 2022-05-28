const Discord = require("discord.js"),
client = new Discord.Client();

module.exports.run = async (client, message, args) => {

    const embed = new Discord.MessageEmbed()
      .setTitle("Arcane Scepter 113")
      .setColor("RANDOM")
      .setThumbnail("https://images-ext-1.discordapp.net/external/8TzdL-gRpEWJQ678vYW7Qb_wqPR3DE2k_Xq8YXFk7uE/https/cdn.discordapp.com/emojis/622681759330598913.png")
      .setDescription(`İstatistikler:
      <:stat3wp:979716952866058250> WP Cost: 125, <:stat2mag:979716892514197534> WP Restore: 70%

      En düşük WP'ye sahip bir müttefike MAG'nizin %40-70'ini WP olarak doldurur.

      Önerilen pasifler: <:PSwgen:979719009303920680> <:PSmag:979718971953655968> <:PSstr:979719035040174090>

      Petlerde en iyi kullanım: <:stat3wp:979716952866058250> ve <:stat2mag:979716892514197534> dengeli, <a:L1squid:979719376548790304> gibi hayvanlar.

      **İstatistiklerin %100 aynı olmasına gerek yoktur. Yakın olması da yeterlidir.**`);
    message.channel.send(embed);

};

exports.config = {
  name: "arcanescepter",
  guildOnly: true,
  aliases: ["as","As","Arcanescepter","113"],
};