// function sayHello(name) {
//     console.log("Hello "+ name) //global scope
// }
// //sayHello("Modest");
// console.log(window);

// console.log(); //global

// setTimeout();
// clearTimeout();

// setInterval();
// clearInterval();
// // all global
// window.console.log();
// window.setInterval();

// var message = '';
// console.log(globalThis.message); //undefined

// function sayHello(name) {
//     console.log(name);
// }
// window.sayHello("Modest");

const log = require('./logger') //better to const to avoid overloading
//logger = 1;
//console.log(log);
//logger.log('message');
log('message');