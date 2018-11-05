const EventEmitter = require('events'); 
const emitter = new EventEmitter(); 
const Logger = require('./logger'); 
const logger = new Logger(); 

logger.on('messageLogged', (arg) => {
  console.log('Listening on the event called messageLogged', arg)
}); 

logger.emit('messageLogged', {id: 1, url: "http://loggerforVincent.com"}); 
