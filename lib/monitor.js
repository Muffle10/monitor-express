var log = require('./log.js')
module.exports = function ({ method, path }, res, next) {
    var count = 1;
    console.log(`[${(Date())}]${method}at ${path}`)
    log.add_log(`${method}${count} request sent`, `${method} request sent at ${path}`)
    log.save()
    count++
    next()
}