var monitor = require('./monitor.js')

class Log {
    this.logs = []
    log(name, description, date = new Date(), options={}){
        this.logs.push({name:{"desc":description,"date":date})
    }
}
       


