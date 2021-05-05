var monitor = require('./monitor.js')
var app = require('express')();

function monitors(app = '') {
    app.serverState = 'on'
    app.logs = { 'a': Date.now() };
    app.log = async function(thing, description) {
        app.logs[thing] = {
            date: Date.now(),
            description: description
        }
    }

    return function(req, res, next) {
        res.send(req.method)
    }
}
app.use('*', monitor)
app.get('/', (req, res) => {
    res.send('BAI')
})
app.listen(5000)