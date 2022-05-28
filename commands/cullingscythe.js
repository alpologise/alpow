const Discord = require("discord.js"),
client = new Discord.Client();

module.exports.run = async (client, message, args) => {

    const embed = new Discord.MessageEmbed()
      .setTitle("Culling Scythe 117")
      .setColor("RANDOM")
      .setThumbnail("https://images-ext-2.discordapp.net/external/33NCx7rvNRsyy9Vn5Gx2fvRIDnH0t-qbwSJPH6ijCZU/https/cdn.discordapp.com/emojis/622681759401639936.png")
      .setDescription(`İstatistikler:
      <:stat3wp:979716952866058250> WP Cost: 100%, <:stat5pa:979717006364377098> Strength Damage: 100%, <:ABmortality:979737847126982707> Mortality 60%

      STR'nizin %70-100'ünü rastgele bir rakibe verir. İki tur için mortality uygular. Ölüm, iyileştirme etkilerini %30-60 azaltır.

      Önerilen pasifler: <:PSmtap:979718991121625138> <:PSstr:979719035040174090> <:PSlifesteal:979719126568284200>

      Petlerde en iyi kullanım: <:stat5pa:979717006364377098> Yüksek, <a:F4eagle:979718450509406238> gibi hayvanlar. 

      **İstatistiklerin %100 aynı olmasına gerek yoktur. Yakın olması da yeterlidir.**`);
    message.channel.send(embed);

};

exports.config = {
  name: "cullingscythe",
  guildOnly: true,
  aliases: ["Cullingscythe","cs","117","Cs"],
};