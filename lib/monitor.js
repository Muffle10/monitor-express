module.exports = function({ method, path }, res, next) {
    console.log(`[${(Date())}]${method} at ${path}`)
    next()
}