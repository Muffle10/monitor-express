var fs = require("fs");
class Log {
  constructor() {
    this.logs = {
      serverStart: {
        date: new Date(),
        desc: "Begin server log",
      },
    };
    this.add_log = (name, description, options = {}) => {
      this.logs[name] = {
        date: new Date(),
        desc: description,
      };
      this.save = () => {
        fs.writeFile(
          "monitor.log.json",
          JSON.stringify(this.logs, null, "\t"),
          (err) => {
            if (err) {
              console.log(err);
            }
            console.log("Log saved at monitor.log!");
          }
        );
      };
    };
  }
}

module.exports = new Log();
