// this modules examples follow nodejs_tutorial.md file


// Example1:
// function sayHello(name) {
//     console.log('Hello ' + name);
// }
// window.sayHello('Ulan');



// Example2:
// console.log(module);



// Example3:
// when we import an object 
// in order to work this in logger.js change  module.exports = log; to module.exports.log = log;
// var logger = require('./logger');
// console.log(logger);
// logger.log('message');

// when we import a single function
// in order to work this code comment out function log(){...} and // module.exports = log in logger.js
// var log = require('./logger');
// log('message');




// Example4:
console.log(__filename); // /Users/ulan13/Desktop/first-app/app.js
console.log(__dirname); // /Users/ulan13/Desktop/first-app



// Example5:
const path = require('path');
var pathObj = path.parse(__filename);
console.log(pathObj)



// Example6:
const os = require('os');
var totalMemory = os.totalmem();
var freeMemory = os.freemem();

// console.log("total memory: " + totalMemory);
// console.log("free memory: " + freeMemory);
// But...
// Template string
// ES6 / ES2015 : ECMAScript 6
console.log(`total memory:  ${totalMemory}`); // total memory:  8589934592
console.log(`free memory:  ${freeMemory}`); // free memory:  912834560




// Example7:
const fs = require('fs');
// var files = fs.readdirSync('./'); // this synchronous // [ 'app.js', 'logger.js' ]
// console.log(files)
fs.readdir('./', function(err, files) {
    if(err) console.log('Error', err);
    else console.log('Result', files)
});
// this is asynchronous // Result [ 'app.js', 'logger.js' ]
// always prefer to use asynchronous version


// Example8:
const EventEmitter = require('events'); // Upper case indicates class/blueprint (imagine human)
const emitter = new EventEmitter(); // Lower case indicates an object (imagine person)

// Register a listener
emitter.on('messageLogged', (arg) => { console.log('Listener called ', arg)});
// Raise an event
emitter.emit('messageLogged', {id: 1, url: 'http://'}); // making a noise or signal

// result: Listener called  { id: 1, url: 'http://' }
// order is important 
// first register event listener and than raise it



// Example9:
// in this example we modified logger.js file
// added Logger class and moved our log function inside it
// in this example we don't need emitter because we moved it to class Logger inside logger.js 


const Logger = require('./logger');
const logger = new Logger();

// Register a listener
logger.on('messageLogged', (arg) => { 
    console.log('Listener called ', arg)
});
logger.log('message')

// result should be same as Example8 // Listener called  { id: 1, url: 'http://' }



// Example10:
const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.write('Hello World');
        res.end();
    }
    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});
// we don't use this in real world...
// server.on('connection', (socket) => {
//     console.log('New connection...')
// });
server.listen(3000);

console.log("Listening on port 3000..."); // Listening on port 3000...

// 1. go to localhost:3000 you will see Hello World
// 2. go to localhost:3000/api/courses you will see [1,2,3]
// In real life we use Express framework to route
// because callback function in createServer will grow linearly if add more routes