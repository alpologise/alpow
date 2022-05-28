const Discord = require("discord.js"),
client = new Discord.Client();

module.exports.run = async (client, message, args) => {

    const embed = new Discord.MessageEmbed()
      .setTitle("Healing Staff 102")
      .setColor("RANDOM")
      .setThumbnail("https://images-ext-2.discordapp.net/external/lyQhjIaM9FwNSkpVWXUdlBLm3sPm0YBhvR6KtwDgYyQ/https/cdn.discordapp.com/emojis/594613521950441481.png")
      .setDescription(`İstatistikler:
      <:stat3wp:979716952866058250> WP Cost: 125, <:stat2mag:979716892514197534> Healing 150%

      MAG'nizin %100-150'sini en düşük sağlık müttefikine kadar iyileştirir.

      Önerilen pasifler: <:PSwgen:979719009303920680> <:PSmag:979718971953655968>

      Petlerde en iyi kullanım: <:stat3wp:979716952866058250> ve <:stat2mag:979716892514197534> yüksek, <a:L1squid:979719376548790304> gibi hayvanlar.

      **İstatistiklerin %100 aynı olmasına gerek yoktur. Yakın olması da yeterlidir.**`);
    message.channel.send(embed);

};

exports.config = {
  name: "healingstaff",
  guildOnly: true,
  aliases: ["Healingstaff","Hs","hs","102"],
};