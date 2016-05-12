const chai = require('chai').expect;
const read = require(__dirname + '../file_read');
const one = require(__dirname + './one.txt')
const two = require(__dirname + './two.txt')
const three = require(__dirname + './three.txt')

describe('first async test', () => {
  it('should read async code', (done) => {
    expect('???')to.eql('???')
    done();
  });
});
