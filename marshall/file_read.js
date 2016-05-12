const fs = require('fs');
const EventEmitter = require('events').EventEmitter;
const ee = new EventEmitter();

// ee.on('file-read', (data) => {
//   console.log('READ: ', data.toString());
// })
//
// function makeReadFile(txt){
//   return function(){
//     fs.readFile(txt, (err, data) => {
//       console.log(data);
//       ee.emit('file-read', data);
//     });
//   };
// };
//
// var one = makeReadFile('./one.txt');
// var two = makeReadFile('./two.txt');
// var three = makeReadFile('./three.txt');
//
// one();
// two();
// three();
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


///---------------------------

ee.on('event', () => {
  process.nextTick(() => {
    fs.readFile('./one.txt', (err, data) => {
      console.log(data);
      ee.emit('file-read', data);
    });
  });
});

ee.emit('event');

ee.on('file-read', (data) => {
  console.log('READ: ', data.toString());
})

//
// function makeReadFile(txt){
//   return function(){
//     fs.readFile(txt, (err, data) => {
//       console.log(data);
//       ee.emit('file-read', data);
//     });
//   };
// };
//
