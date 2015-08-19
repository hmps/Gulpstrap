// var requireDir = require('require-dir');
// var gulp = require('gulp');

var stylus = require('./dist/tasks/stylus');
var less = require('./dist/tasks/less');
var sass = require('./dist/tasks/sass');
var eslint = require('./dist/tasks/eslint');

stylus.setupTask({src: 'test/src/*.styl', dest: 'test/dist/'});
less.setupTask({src: 'test/src/*.less', dest: 'test/dist/'});
sass.setupTask({src: 'test/src/*.scss', dest: 'test/dist/'});
eslint.setupTask({src: 'test/src/*.js' });
