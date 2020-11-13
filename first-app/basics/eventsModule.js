const EventEmitter = require('events');
const emitter = new EventEmitter();
// console.log(emitter);

// Register a listener
emitter.on('messageLogged', (arg) => {
  console.log('Listener called', arg);
});

emitter.on('messageChanged', function() {
  console.log('Listener called for message Changed');
});

// Raise an event
emitter.emit('messageLogged', { id: 1, url: 'http://' });
emitter.emit('messageChanged');
