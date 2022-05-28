const Discord = require("discord.js"),
client = new Discord.Client();

module.exports.run = async (client, message, args) => {

    const embed = new Discord.MessageEmbed()
      .setTitle("Glacial Axe 115")
      .setColor("RANDOM")
      .setThumbnail("https://images-ext-1.discordapp.net/external/ry3VOu-KukQ9p9Bmum90UDtiCgx68U4BwsNF-QR-JsY/https/cdn.discordapp.com/emojis/622681663289294850.png")
      .setDescription(`İstatistikler:
      <:stat3wp:979716952866058250> WP Cost: 120, <:stat5pa:979717006364377098> Damage: 80%

      STR'nizin %50-80'ini rastgele bir rakibe verir. Dondurma uygular. Düşman bir tur hareketsiz kalır.

      Önerilen pasifler: <:PSmtap:979718991121625138> <:PSstr:979719035040174090> <:PSlifesteal:979719126568284200>

      Petlerde en iyi kullanım: <:stat3wp:979716952866058250> ve <:stat5pa:979717006364377098> dengeli, <a:L4fox:979729317217075240> gibi hayvanlar.

      **İstatistiklerin %100 aynı olmasına gerek yoktur. Yakın olması da yeterlidir.**`);
    message.channel.send(embed);

};

exports.config = {
  name: "glacialaxe",
  guildOnly: true,
  aliases: ["ga","115","Ga","Glacialaxe"],
};