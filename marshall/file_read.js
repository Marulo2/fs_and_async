const fs = require('fs');
const EventEmitter = require('events').EventEmitter;
const ee = new EventEmitter();

ee.on('file-read', (data) => {
  console.log('READ: ', data.toString());
})


// Could this function be an example of nested callbacks?

function makeReadFile(txt){
  return function(){
    fs.readFile(txt, (err, data) => {
      console.log(data);
      ee.emit('file-read', data);
    });
  };
};

var one = makeReadFile('./one.txt');
var two = makeReadFile('./two.txt');
var three = makeReadFile('./three.txt');

one();
two();
three();

///----------------- OR OR OR (is this worse?)

ee.on('one', () => {
  process.nextTick(() => {
    fs.readFile('./one.txt', (err, data) => {
      console.log(data);
      ee.emit('file-read', data);
    });
  });
});

ee.on('two', () => {
  process.nextTick(() => {
    fs.readFile('./two.txt', (err, data) => {
      console.log(data);
      ee.emit('file-read', data);
    });
  });
});

ee.on('three', () => {
  process.nextTick(() => {
    fs.readFile('./three.txt', (err, data) => {
      console.log(data);
      ee.emit('file-read', data);
    });
  });
});

ee.emit('one');
ee.emit('two');
ee.emit('three');

// ee.on('file-read', (data) => {
//   console.log('READ: ', data.toString());
// })

///----------------------


//
// ///
//
// ee.on('read', function(){
//   console.log('test');
// });
//
// ee.emit('read');

/// --------------------

// var database = {
//   text: [
//     { path: './one.txt' },
//     { path: './two.txt' },
//     { path: './three.txt' }
//   ]
// };
//
// function readText(){
//   EventEmitter.call(this);
// }
//
// readText.prototype.save = function(obj){
//   database.text.push(obj);
//   this.emit('saved-text', obj);
// };
//
// readText.prototype.all = function(){
//   return database.text;
// }
//
// module.exports = readText;

///-------------------------

// var fsp = require('fs-promise');
//
// new Promise(
//   function(resolve){
//
//   }
// )
