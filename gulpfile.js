// var requireDir = require('require-dir');
// var gulp = require('gulp');

var stylus = require('./dist/tasks/stylus');
var less = require('./dist/tasks/less');
var sass = require('./dist/tasks/sass');
var eslint = require('./dist/tasks/eslint');
var clean = require('./dist/tasks/clean');
var sequence = require('./dist/tasks/sequence');

stylus.setupTask({src: 'test/src/*.styl', dest: 'test/dist/'});
less.setupTask({src: 'test/src/*.less', dest: 'test/dist/'});
sass.setupTask({src: 'test/src/*.scss', dest: 'test/dist/'});
eslint.setupTask({src: 'test/src/*.js' });
clean.setupTask({paths: ['test/dist']});

sequence.parallell('parallell1', ['clean', 'stylus', 'eslint']);
sequence.serial('serial1', ['clean', 'stylus', 'eslint']);

// Watch, tasks to run ?
// Copy files to directory
// Karma
// Git tag
// Bump version
// Create release
// serve
