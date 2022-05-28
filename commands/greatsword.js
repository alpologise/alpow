const Discord = require("discord.js"),
client = new Discord.Client();

module.exports.run = async (client, message, args) => {

    const embed = new Discord.MessageEmbed()
      .setTitle("Great Sword 101")
      .setColor("RANDOM")
      .setThumbnail("https://images-ext-2.discordapp.net/external/3mudqw314My4yZlq9P-C_hupNkRWhOjgvmaRK5saD1U/https/cdn.discordapp.com/emojis/594613521271095299.png")
      .setDescription(`İstatistikler:
      <:stat3wp:979716952866058250> WP Cost: 150, <:stat5pa:979717006364377098> STR: 55%

      STR'nizin %35-55'ini tüm rakiplere dağıtır.

      Önerilen pasifler: <:PSstr:979719035040174090> <:PSlifesteal:979719126568284200> <:PScrit:979723519086723092> <:PSmtap:979718991121625138>

      Petlerde en iyi kullanım: <:stat5pa:979717006364377098> Yüksek, <a:F4eagle:979718450509406238> gibi hayvanlar. 

      **İstatistiklerin %100 aynı olmasına gerek yoktur. Yakın olması da yeterlidir.**`);
    message.channel.send(embed);

};

exports.config = {
  name: "greatsword",
  guildOnly: true,
  aliases: ["gs","101","Gs","Greatsword"],
};