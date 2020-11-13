const EventEmitter = require('events');

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
  log(message) {
    // Log in the console
    console.log(message);
  
    // Raise an event
    this.emit('messageLogged', { id: 1, url: 'http://' });
  }
}

module.exports = Logger;