const Discord = require("discord.js"),
client = new Discord.Client();

module.exports.run = async (client, message, args) => {

    const embed = new Discord.MessageEmbed()
      .setTitle("Wand of Absorption 109")
      .setColor("RANDOM")
      .setThumbnail("https://images-ext-2.discordapp.net/external/xyd6XM-QMHXWFKPsfYFmxi_-qegLdI5uoVBhdlMbx2w/https/cdn.discordapp.com/emojis/594613521703108631.png")
      .setDescription(`İstatistikler:
      <:stat3wp:979716952866058250> WP Cost: 150, <:stat2mag:979716892514197534> Damage: 100%, <:stat3wp:979716952866058250> WP Restore: 40%

      MAG'nizin %80-100'ünü rastgele bir rakibe verir. WP'lerini verilen hasarın %20-40'ına eşit bir müttefike verir.

      Önerilen pasifler: <:PSmtap:979718991121625138> <:PSmag:979718971953655968> <:PSlifesteal:979719126568284200>

      Petlerde en iyi kullanım: <:stat2mag:979716892514197534> Yüksek, <a:L5deer:979719421348175962> gibi hayvanlar.

      **İstatistiklerin %100 aynı olmasına gerek yoktur. Yakın olması da yeterlidir.**`);
    message.channel.send(embed);

};

exports.config = {
  name: "wandofabsorption",
  guildOnly: true,
  aliases: ["Wandofabsorption","Wa","wa","109"],
};