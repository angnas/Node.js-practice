const http = require('node:http');


const server = http.createServer((req, res) =>{
    if (req.url === '/' ) {
        res.write('Hello World');
        res.end();
    }
    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3]))
        res.end();
    }
});


server.listen(3000);

console.log('Listening on port 3000...');



/////////////////////////////////
// const EventEmitter = require('node:events');
// const emitter = new EventEmitter();

// // Register a listener
// emitter.addListener('messageLogged', (arg) => {
//     console.log('Listener called', arg);
// })

// //Raise an event
// emitter.emit('messageLogged' ,{ id : 1, url: 'http://'});

//Raise: logging (data: message)



//////////////////////////////////
// const fs = require('node:fs');

//Syncronos 
 // const files = fs.readdirSync('./');
// console.log(files);


//Asyncronos
// always prefer to use Asyncronos methods
// fs.readdir('$', function(err, files){
//     if (err) console.log('Error', err);
//     else console.log('Result', files);
// })

////////////////////////////////
// const os = require('node:os');

// var totalMem = os.totalmem();
// var freeMem = os.freemem();

// console.log(`Total Memory: ${totalMem}`);
// console.log(`Free Memory: ${freeMem}`);


// console.log('Total Memory: ' + totalMem);



////////////////////////////////////
// const path = require('node:path');

// const pathObj = path.parse(__filename);

// console.log(pathObj);

/////////////////////////////////////
// const logger = require("./logger");

// logger("message");

///////////////////////////////////////
// function sayHello(name) {
//     console.log("hello" + name);
    
// }
// // sayHello('Angela');

// console.log(window);



