const url = 'http://mylogger.io/log';

function logger(message) {
    //send an HTTP request
    console.log(message);
}


module.exports = logger;

// module.export.url = url;
// endpoint is the url
// module.export.endpoint = url;