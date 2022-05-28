const Discord = require("discord.js"),
client = new Discord.Client();

module.exports.run = async (client, message, args) => {

    const embed = new Discord.MessageEmbed()
      .setTitle("Bow 103")
      .setColor("RANDOM")
      .setThumbnail("https://images-ext-2.discordapp.net/external/eLfIPcuTmnbaaT9IK-Eae8zG1Brz2HYqOFy4B7R5oIs/https/cdn.discordapp.com/emojis/594613521367695364.png")
      .setDescription(`İstatistikler:
      <:stat3wp:979716952866058250> WP Cost: 120, <:stat5pa:979717006364377098> Strength Damage: 160%

      STR'nizin %110-160'ını rastgele bir rakibe dağıtır.

      Önerilen pasifler: <:PSmtap:979718991121625138> <:PSstr:979719035040174090>

      Petlerde en iyi kullanım: <:stat5pa:979717006364377098> dengeli, <a:F4eagle:979718450509406238> gibi hayvanlar.

      **İstatistiklerin %100 aynı olmasına gerek yoktur. Yakın olması da yeterlidir.**`);
    message.channel.send(embed);

};

exports.config = {
  name: "bow",
  guildOnly: true,
  aliases: ["Bow","103"],
};