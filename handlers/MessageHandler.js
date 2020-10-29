const Discord = require("discord.js");
const Bot = require("../Bot");

class MessageHandler {
  constructor(bot) {
    this.bot = bot;
    this.afterInit();
  }

  afterInit = function () {
    this.bot.log("MessageHandler initialized");
    // Initialize Message Listeners
    this.bot.on("message", (message) => {
      // Parse Message
    });
  };
}

module.exports = MessageHandler;
