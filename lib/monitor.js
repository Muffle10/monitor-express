var log = require("./log.js");
var count = 1;
var process = require("process");
module.exports = monitor = function ({ method, originalUrl }, res, next) {
  console.log(`[${Date.now()}](${process.pid})${method} at ${originalUrl}`);
  log.add_log(
    `${method}${count} request sent`,
    `${method} request sent at ${originalUrl}`
  );
  log.save();
  count++;
  next();
};
