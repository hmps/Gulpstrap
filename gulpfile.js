// var requireDir = require('require-dir');
// var gulp = require('gulp');

var less = require('./dist/tasks/less');
var sass = require('./dist/tasks/sass');
var eslint = require('./dist/tasks/eslint');
var stylus = require('./dist/tasks/stylus');
var clean = require('./dist/tasks/clean');
var sequence = require('./dist/tasks/sequence');

less({name: 'less', src: 'test/src/*.less', dest: 'test/dist/'});
sass({name: 'sass', src: 'test/src/*.scss', dest: 'test/dist/'});
stylus({name: 'stylus', src: 'test/src/*.styl', dest: 'test/dist/'});
eslint({name: 'eslint', src: 'test/src/*.js' });
clean({name: 'clean', paths: ['test/dist']});

sequence('parallell1', ['clean', 'stylus', 'eslint']);

// Watch, tasks to run ?
// Copy files to directory
// Karma
// Git tag
// Bump version
// Create release
// serve
