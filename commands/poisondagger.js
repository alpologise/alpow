const Discord = require("discord.js"),
client = new Discord.Client();

module.exports.run = async (client, message, args) => {

    const embed = new Discord.MessageEmbed()
      .setTitle("Poison Dagger 108")
      .setColor("RANDOM")
      .setThumbnail("https://images-ext-2.discordapp.net/external/tTdApwobYh4Iu9x0ihbPbaSTc57Zf4CdUjhxpKeDtYU/https/cdn.discordapp.com/emojis/594613521543856128.png")
      .setDescription(`İstatistikler:
      <:stat3wp:979716952866058250> WP Cost: 100%, <:stat5pa:979717006364377098> Strength Damage: 100%, <:ABpoison:979736411009863740> Poisons for 65% of <:stat2mag:979716892514197534> as true damage

      STR'nizin %70-100'ünü rastgele bir rakibe verir. Üç tur boyunca zehir uygular. Zehir, dönüşün sonunda MAG'ın %40-65'ini gerçek hasar olarak verir.

      Önerilen pasifler: <:PSmtap:979718991121625138> <:PSlifesteal:979719126568284200>

      Petlerde en iyi kullanım: <:stat2mag:979716892514197534> Yüksek, <a:L5deer:979719421348175962> gibi hayvanlar. Biraz <:stat6hp:979717029353361418> ile daha başarılı.

      **İstatistiklerin %100 aynı olmasına gerek yoktur. Yakın olması da yeterlidir.**`);
    message.channel.send(embed);

};

exports.config = {
  name: "poisondagger",
  guildOnly: true,
  aliases: ["Dagger","Poisondagger","Ps","ps","108"],
};