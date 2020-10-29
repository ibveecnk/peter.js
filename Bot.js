const Discord = require("discord.js");

class Bot extends Discord.Client {
  constructor() {
    super();
    this.login(process.env.TOKEN).then(() => {
      this.afterInit();
    });
  }

  afterInit = function () {
    this.user.setPresence({
      activity: { name: "Peter Yeeter" },
      status: "online",
    });
  };
}

module.exports = Bot;
