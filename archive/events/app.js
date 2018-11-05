/** 
 * class  - human
 * object - person (instance of a class) 
**/ 

const EventEmitter = require('events'); 
const emitter = new EventEmitter(); 

emitter.on('messageLogged', (arg) => { 
  console.log('Listener called', arg)
}); 

emitter.emit('messageLogged', {id: 1, url: 'http://'}); 

// Raise: logging (data: message) 
emitter.on('Logging', (arg) => {
  console.log('Listener for logger called', arg)
})

emitter.emit('Logging', {id: 4, url: 'http://logger.io'})
