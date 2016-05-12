const fs = require('fs');
const EventEmitter = require('events').EventEmitter;
const ee = new EventEmitter();

ee.on('file-read', (data) => {
  console.log('READ: ', data.toString());
})

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

///

var fsp = require('fs-promise');

new Promise(
  function(resolve){

  }
)

///

function readFile(txt){
  return fs.readFile(txt)
}
