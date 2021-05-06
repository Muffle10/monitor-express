var log = require('./log.js')
var count = 1;
module.exports = function ({ method, path }, res, next) {
    console.log(`[${(Date())}]${method}at ${path}`)
    log.add_log(`${method}${count} request sent`, `${method} request sent at ${path}`)
    log.save()
    count++
    next()
}