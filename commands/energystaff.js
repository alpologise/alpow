const Discord = require("discord.js"),
client = new Discord.Client();

module.exports.run = async (client, message, args) => {

    const embed = new Discord.MessageEmbed()
      .setTitle("Energy Staff 111")
      .setColor("RANDOM")
      .setThumbnail("https://images-ext-2.discordapp.net/external/9F3d0a7VG-fblvJJQvMIK2QMxV9FUFwWoZizv0sky4A/https/cdn.discordapp.com/emojis/594613521736663051.png")
      .setDescription(`İstatistikler:
      <:stat3wp:979716952866058250> WP Cost: 100, <:stat2mag:979716892514197534> Magic Damage: %65

      Bir enerji dalgası gönderir. MAG'nizin %35-65'ini tüm rakiplere dağıtır.

      Önerilen pasifler: <:PSmtap:979718991121625138> <:PSmag:979718971953655968> <:PSlifesteal:979719126568284200>

      Petlerde en iyi kullanım: <:stat2mag:979716892514197534> Yüksek, <a:L5deer:979719421348175962> gibi hayvanlar. Biraz <:stat6hp:979717029353361418> ile daha başarılı.

      **İstatistiklerin %100 aynı olmasına gerek yoktur. Yakın olması da yeterlidir.**`);
    message.channel.send(embed);

};

exports.config = {
  name: "energystaff",
  guildOnly: true,
  aliases: ["es","111","Es","Energystaff"],
};