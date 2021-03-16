const EventEmitter = require('events');
const emitter = new EventEmitter();
//Register a listener
emitter.on('messageLogged', function() {
    console.log("Listener called");
})

emitter.on("water", function(arg) {
    arg.forEach(element => {
        console.log(element);
        console.log(' ');
    });
})
//Raise an event
//emitter.emit('messageLogged'); // emit emitować, Making a noise, produce - signalling
//But where is listener

emitter.emit('water',[1,2,3,4]);