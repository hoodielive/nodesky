const EventEmitter = require("events");
const emitter = new EventEmitter();

const url = "http://willfixitlol.com";

class Logger extends EventEmitter {
  // the function key word is not needed inside of classes, hence it is dropped
  log(messageLogged) {
    console.log(messageLogged);

    // Raise an event -> you also have to register a listener
    this.emit("messageLogged", { id: 1, url: url });
  }
}
module.exports = Logger;
