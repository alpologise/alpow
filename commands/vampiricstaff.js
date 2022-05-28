const Discord = require("discord.js"),
client = new Discord.Client();

module.exports.run = async (client, message, args) => {

    const embed = new Discord.MessageEmbed()
      .setTitle("Vampiric Staff 107")
      .setColor("RANDOM")
      .setThumbnail("https://images-ext-2.discordapp.net/external/Dp09bCZuEAqWwCCiS30-JUxU6S_dBBk-HL820LgwIiQ/https/cdn.discordapp.com/emojis/594613521371627561.png")
      .setDescription(`İstatistikler:
      <:stat3wp:979716952866058250> WP Cost: 100,<:stat2mag:979716892514197534> Damage and heal: 45%
    
      Tüm düşmanlara Mag'ınzın %25-45'ini verir. Verdiğiniz hasarla tüm müttefikleriniz iyileşir.

      Önerilen pasifler: <:PSmtap:979718991121625138> <:PSmag:979718971953655968> <:PSlifesteal:979719126568284200>

      Petlerde en iyi kullanım: <:stat2mag:979716892514197534> Yüksek, <a:L5deer:979719421348175962> gibi hayvanlar.

      **İstatistiklerin %100 aynı olmasına gerek yoktur. Yakın olması da yeterlidir.**`);
    message.channel.send(embed);

};

exports.config = {
  name: "vampiricstaff",
  guildOnly: true,
  aliases: ["vs","107","Vampiricstaff","Vs","Vampiric","vstaff","Vstaff"],
};