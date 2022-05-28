const Discord = require("discord.js"),
client = new Discord.Client();

module.exports.run = async (client, message, args) => {

    const embed = new Discord.MessageEmbed()
      .setTitle("Vanguard's Banner 116")
      .setColor("RANDOM")
      .setThumbnail("https://images-ext-2.discordapp.net/external/MGFWbC9autBXqkqv8v4l9voGdTj-Ebrx6s-g9ClmBnU/https/cdn.discordapp.com/emojis/622681759565479956.png")
      .setDescription(`İstatistikler:
      <:stat3wp:979716952866058250> WP Cost: 250, <:ABattup3:979731065826586674> Attack buff: 20%, <:ABattup2:979731275512430592> Attack+ buff: 30%, <:ABattup1:979731303077388309> Attack++ buff: 40%

      Tüm müttefiklerinize iki tur boyunca saldırı artışı uygular. Buff sona erdiğinde kişinin WP'si yeterli seviye de ise, buff daha güçlü bir sürümle yeniden aktif olacaktır. Birinci, ikinci, üçüncü güçlendirme: %10-20, %20-30, %30-40 daha fazla hasar.

      Önerilen pasifler: <:PSwgen:979719009303920680> <:PSwp:979733560829292545> <:PSthorns:979719052417191966>

      Petlerde en iyi kullanım: <:stat3wp:979716952866058250> ve <:stat5pa:979717006364377098> dengeli, <a:F5boar:979733987448721418> gibi hayvanlar.

      **İstatistiklerin %100 aynı olmasına gerek yoktur. Yakın olması da yeterlidir.**`);
    message.channel.send(embed);

};

exports.config = {
  name: "banner",
  guildOnly: true,
  aliases: ["Banner","116"],
};