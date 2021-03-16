 const EvenEmitter = require('events');
 const Logger = require('./logger');
 const logger = new Logger();

 //Register a listener
logger.on('logger', (arg)=> {
    console.log('Listerer called',arg);
});

 logger.log('message');
