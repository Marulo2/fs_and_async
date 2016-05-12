var readText = require('./file_read')
var allText = new readText();

allText.on('saved-text', function(data) {
  fs.readFile(readText.path, (err, data) => {
    console.log(data);
    ee.emit('file-read', data);
  });
});

allText.save({ path: "./one.txt"});
allText.save({ path: "./two.txt"});
allText.save({ path: "./three.txt"});
