var expect = require('expect.js');
var File = require('vinyl');
var gJsdc = require('../');

describe('gulp-jsdc', function() {
  describe('in buffer mode', function() {
    it('should transfrom es6 to es5', function(done) {
      var bufferFile = new File({
        contents: new Buffer('let a = 1')
      });

      var stream = gJsdc();
      stream.write(bufferFile);

      stream.once('data', function(file) {
        expect(file.isBuffer()).to.be.ok();
        expect(file.contents.toString()).to.eql('var a = 1');
        done();
      });
    });
    it('module to amd/cmd', function(done) {
      var bufferFile = new File({
        contents: new Buffer('module a from "a"')
      });

      var stream = gJsdc();
      stream.write(bufferFile);

      stream.once('data', function(file) {
        expect(file.isBuffer()).to.be.ok();
        expect(file.contents.toString()).to.eql('var a=require("a");');
        done();
      });
    });
    it('options define', function(done) {
      var bufferFile = new File({
        contents: new Buffer('module a from "a"')
      });

      var stream = gJsdc({
        define: true
      });
      stream.write(bufferFile);

      stream.once('data', function(file) {
        expect(file.isBuffer()).to.be.ok();
        expect(file.contents.toString()).to.eql('define(function(require,exports,module){var a=require("a");});');
        done();
      });
    });
  });
});