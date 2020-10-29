const Discord = require("discord.js");
const Bot = require("../Bot");

class ModActionLogHandler {
  constructor(bot) {
    this.bot = bot;
    this.afterInit();
  }

  afterInit = function () {
    console.log("ModActionLogHandler initialized");
  };

  actionReceived = function (guild, message) {
    // Todo
  };
}

module.exports = ModActionLogHandler;
