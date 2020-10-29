const Discord = require("discord.js");

class Bot extends Discord.Client {
  constructor() {
    super();
    this.login(process.env.TOKEN).then(() => {
      this.afterInit();
      this.log("Test", 1, 0);
    });
  }

  afterInit = function () {
    this.user.setPresence({
      activity: { name: "Peter Yeeter" },
      status: "online",
    });
  };

  log = function (message, timestamp = true, newline = true) {
    let logstring =
      (timestamp ? this.getTimestamp() + "  " : "") +
      message +
      (newline ? "\n" : "");
    process.stdout.write(logstring);
  };

  getTimestamp = function () {
    const date = new Date();
    let hours = date.getHours().toString();
    let minutes = date.getMinutes().toString();
    let seconds = date.getSeconds().toString();
    let milliseconds = date.getMilliseconds().toString();

    if (hours === "0") hours = "00";
    else if (hours.length < 2) hours = `0${hours}`;

    if (minutes === "0") minutes = "00";
    else if (minutes.length < 2) minutes = `0${minutes}`;

    if (seconds === "0") seconds = "00";
    else if (seconds.length < 2) seconds = `0${seconds}`;

    if (milliseconds === "0") milliseconds = "00";
    else if (milliseconds.length < 2) milliseconds = `00${milliseconds}`;
    else if (milliseconds.length < 3) milliseconds = `0${milliseconds}`;

    return `[${hours}:${minutes}:${seconds}:${milliseconds}]`;
  };
}

module.exports = Bot;
