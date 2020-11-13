// Module Function Wrapper

// (function (exports, require, module, __filename, __dirname) {  
// });

// console.log(module);
// console.log(exports);
// console.log(module.exports);
// console.log(__filename);
// console.log(__dirname);

var url = 'http://mylogger.io/log';

function log(message) {
  // Sent an HTTP request
  console.log(message);
}

module.exports = log;
