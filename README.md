# gulp-jsdc

### compiler es6 to es5 by jsdc

> https://github.com/army8735/jsdc

[![NPM version](https://badge.fury.io/js/gulp-jsdc.png)](https://npmjs.org/package/gulp-jsdc)
[![Build Status](https://travis-ci.org/army8735/gulp-jsdc.svg?branch=master)](https://travis-ci.org/army8735/gulp-jsdc)
[![Coverage Status](https://coveralls.io/repos/army8735/gulp-jsdc/badge.png)](https://coveralls.io/r/army8735/gulp-jsdc)
[![Dependency Status](https://david-dm.org/army8735/gulp-jsdc.png)](https://david-dm.org/army8735/gulp-jsdc)

### Usage
```js
var gJsdc = require('gulp-jsdc');

gulp.task('jsdc', function() {
  gulp.src('**/*.js')
    .pipe(gJsdc())
    .pipe(gulp.dest('dist'))
});
```

### Options
```js
var gJsdc = require('gulp-jsdc');

gulp.task('jsdc', function() {
  gulp.src('**/*.js')
    .pipe(gJsdc({
      define: true
    }))
    .pipe(gulp.dest('dist'))
});
```
> It will wrap `define` for CommonJS module