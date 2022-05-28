const Discord = require("discord.js"),
client = new Discord.Client();

module.exports.run = async (client, message, args) => {

    const embed = new Discord.MessageEmbed()
      .setTitle("Defender's Aegis 105")
      .setColor("RANDOM")
      .setThumbnail("https://images-ext-2.discordapp.net/external/gca1B8rsViH7NKHymOhJ6dzjYsRiiNT3ThvmcfU9yaM/https/cdn.discordapp.com/emojis/594613521648713767.png")
      .setDescription(`İstatistikler:
      <:stat3wp:979716952866058250> WP Cost 150, <:ABtaunt:979744640792145941> Taunt Buff: 50%

      Hayvanınıza gelen hasarı %30-50 azaltır. Tek bir rastgele düşmana saldıran tüm düşmanları kendisine saldırmaya zorlayan iki tur boyunca alay hareketi güçlendirmesi ekler.

      Önerilen pasifler: <:PSwgen:979719009303920680> <:PShgen:979718945416282133> <:PSthorns:979719052417191966> <:PShp:979724535383351296>

      Petlerde en iyi kullanım: <:stat6hp:979717029353361418> ve <:stat3wp:979716952866058250> yüksek, :snail: :sloth: gibi hayvanlar.

      **İstatistiklerin %100 aynı olmasına gerek yoktur. Yakın olması da yeterlidir.**`);
    message.channel.send(embed);

};

exports.config = {
  name: "defendersaegis",
  guildOnly: true,
  aliases: ["Defendersaegis","Defender","Da","da","105","shield","Shield"],
};