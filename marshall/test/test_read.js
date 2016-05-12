const chai = require('chai').expect;
const read = require(__dirname + '../file_read');

describe('first async test', () => {
  it('should read async code', (done) => {
    readPost(__dirname + '../file_read.js')
     .then(function(data){
       data.should.equal('content read');
       done();
     })
     .catch(done);
  })
})
