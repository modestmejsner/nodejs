const fs = require("fs");
// const files = fs.readdirSync('./'); //synchorniczne / blocking
// console.log(files);

fs.readdir('./', function(err, files) { //async non-blocking - better choice ALLWAYS
    if (err) console.log('Error', err);
    else console.log('Result',files);
} );
