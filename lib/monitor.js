var log = require('./log.js')
module.exports = function ({ method, path }, res, next) {
    console.log(`[${(Date())}]${method} at ${path}`)
    log.add_log(`${method} request sent`,`${method} request sent at ${path}`)
    next()
}