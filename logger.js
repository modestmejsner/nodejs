const EventEmitter = require("events");
class Logger extends EventEmitter {
     log(message) { //method without function keyword
        //Send an HTTP request
        console.log(message);
        this.emit('logger', message);
    }
}
    module.exports = Logger;
