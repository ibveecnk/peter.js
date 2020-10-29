const Discord = require("discord.js");
const Bot = require("../Bot");

class ModActionLogHandler {
  constructor(bot) {
    this.bot = bot;
    this.afterInit();
  }

  afterInit = function () {
    // Register Handlers
  };

  actionReceived = function (guild, message) {
    // Todo
  };
}

module.exports = ModActionLogHandler;
