const Discord = require("discord.js"),
client = new Discord.Client();

module.exports.run = async (client, message, args) => {

    const embed = new Discord.MessageEmbed()
      .setTitle("Flame Staff 110")
      .setColor("RANDOM")
      .setThumbnail("https://images-ext-1.discordapp.net/external/_hMmTHqrNG7YxglI71wzPVfaGcMw5u3yNV8VxqyXH9A/https/cdn.discordapp.com/emojis/594613521573216266.png")
      .setDescription(`İstatistikler:
      <:stat3wp:979716952866058250> WP Cost: 100, <:stat2mag:979716892514197534> Magic Damage: 80%, <:ABflame:979737804542181416> Flame: 40%, Detonate Damage: 60%

      Rastgele bir rakibe MAG'nizin %60-80'ini verir. Üç tur boyunca alev uygular. Alev, tur sonunda MAG'nizin %20-40'ını vurur. Alev zaten yanmakta olan bir düşmana uygulanırsa, MAG'nizin %40-60'ını vuran bir patlama yaratır.

      Önerilen pasifler: <:PSmtap:979718991121625138> <:PSmag:979718971953655968> <:PSlifesteal:979719126568284200>

      Petlerde en iyi kullanım: <:stat2mag:979716892514197534> Yüksek, <a:L5deer:979719421348175962> gibi hayvanlar. Biraz <:stat6hp:979717029353361418> ile daha başarılı.

      **İstatistiklerin %100 aynı olmasına gerek yoktur. Yakın olması da yeterlidir.**`);
    message.channel.send(embed);

};

exports.config = {
  name: "flamestaff",
  guildOnly: true,
  aliases: ["Flamestaff","fs","Fs","110"],
};