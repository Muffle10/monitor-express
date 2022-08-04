var log = require("./log.js");
var count = 1;
var process = require("process");
var monitor = ({ method, originalUrl }, res, next) => {
  console.log(
    `[Time:${Date.now()}] (Process:${
      process.pid
    }) ${method} at ${originalUrl} \n`
  );
  log.add_log(
    `${method}${count} request sent`,
    `${method} request sent at ${originalUrl}`
  );
  log.save();
  count++;
  next();
};
module.exports = monitor;
