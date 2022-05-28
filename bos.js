const Discord = require("discord.js"),
client = new Discord.Client();

module.exports.run = async (client, message, args) => {

    const embed = new Discord.MessageEmbed()
      .setTitle("")
      .setColor("RANDOM")
      .setThumbnail("")
      .setDescription(`İstatistikler:

      **İstatistiklerin %100 aynı olmasına gerek yoktur. Yakın olması da yeterlidir.**`);
    message.channel.send(embed);

};

exports.config = {
  name: "",
  guildOnly: true,
  aliases: [""],
};