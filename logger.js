const EventEmitter = require('events'); // Upper case indicates class/blueprint (imagine human)
// const emitter = new EventEmitter(); // Lower case indicates an object (imagine person)

var url = "http://mylogger.io/log";

class Logger extends EventEmitter {
    log(message) {
        // send and HTTP request
        console.log(message);
    
        // Raise an event
        this.emit('messageLogged', {id: 1, url: 'http://'}); 
    
    }

}

// function log(message) {
//     // send and HTTP request
//     console.log(message);
// }

// module.exports.log = log;
// module.exports = log // we can use this way if we have only a single method
// you can impolement however you want. Ex: module.exports.blabla = log;

module.exports = Logger;