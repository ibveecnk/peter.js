const Discord = require('discord.js');
const Bot = require('../Bot');

class MessageHandler {
  constructor(bot) {
    this.bot = bot;
    this.afterInit();
  }

  afterInit = function () {
    console.log('MessageHandler initialized');
    // Initialize Message Listeners
    this.bot.on('message', (message) => {
      console.log('Message received:', message.content);
    });
    this.bot.on('message', (message) => {
      console.log('Message received:', message.content);
    });
  };
}

module.exports = MessageHandler;
