const Discord = require("discord.js"),
client = new Discord.Client();

module.exports.run = async (client, message, args) => {

    const embed = new Discord.MessageEmbed()
      .setTitle("Spirit Staff 112")
      .setColor("RANDOM")
      .setThumbnail("https://images-ext-2.discordapp.net/external/0dGKkdiglkgac6s3IwAMCFMYFTqSG95NVH8sK5ni2YU/https/cdn.discordapp.com/emojis/594613521581473851.png")
      .setDescription(`İstatistikler:
      <:stat3wp:979716952866058250> WP Cost: 125, <:stat2mag:979716892514197534> Heal: 50%, <:ABdfup:979741931519238184> Defense up: 30%

      Tüm müttefiklerinizi MAG'nizin %30-50'si kadar iyileştirir. İki tur için savunma artışı uygulayın. Savunma artışı, gelen hasarı %20-30 azaltır.

      Önerilen pasifler: <:PSwgen:979719009303920680> <:PSwp:979733560829292545> <:PSmag:979718971953655968>

      Petlerde en iyi kullanım: <:stat2mag:979716892514197534> ve <:stat3wp:979716952866058250> yüksek, <a:L1squid:979719376548790304> <a:sweet:979743308052058172> gibi hayvanlar.

      **İstatistiklerin %100 aynı olmasına gerek yoktur. Yakın olması da yeterlidir.**`);
    message.channel.send(embed);

};

exports.config = {
  name: "spiritstaff",
  guildOnly: true,
  aliases: ["Spiritstaff","ss","Ss","Sstaff","sstaff","112"],
};