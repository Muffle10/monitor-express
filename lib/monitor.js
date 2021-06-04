var log = require('./log.js')
var count = 1;
module.exports = monitor = function ({ method, path, body }, next) {
    console.log(`[ debug ]${method} at ${path}`)
    log.add_log(`${method}${count} request sent`, `${method} request sent at ${path}`)
    log.save()
    count++
    next()
} 
