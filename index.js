var through = require('through2');
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;
var jsdc = require('jsdc');

const PLUGIN_NAME = 'gulp-jsdc';

function transform(options) {
  options = options || {};

  var stream = through.obj(function(file, enc, callback) {
    if(file.isNull()) {
      this.push(file);
      return callback();
    }

    if(file.isBuffer()) {
      jsdc.define(options.define);
      var output = jsdc.parse(file.contents.toString());

      file.contents = new Buffer(output);

      this.push(file);
      return callback();
    }

    if(file.isStream()) {
      this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
      return callback();
    }
  });

  return stream;
};

module.exports = transform;