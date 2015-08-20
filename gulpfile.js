// var requireDir = require('require-dir');
// var gulp = require('gulp');

var less = require('./dist/tasks/less');
var sass = require('./dist/tasks/sass');
var eslint = require('./dist/tasks/eslint');
var stylus = require('./dist/tasks/stylus');
var clean = require('./dist/tasks/clean');
var copy = require('./dist/tasks/copy');
var bump = require('./dist/tasks/bump');
var serve = require('./dist/tasks/serve');

var sequence = require('./dist/tasks/sequence');
var gulpWatch = require('./dist/tasks/watch');

less({name: 'less', src: 'test/src/*.less', dest: 'test/dist/'});
sass({name: 'sass', src: 'test/src/*.scss', dest: 'test/dist/'});
stylus({name: 'stylus', src: 'test/src/*.styl', dest: 'test/dist/'});
eslint({name: 'eslint', src: 'test/src/*.js' });
clean({name: 'clean', paths: ['test/dist']});
copy({name: 'copy', src: 'test/src/**/*.js', dest: 'test/dist'});
bump({ name: 'bump' });
serve({
    port: 9000,
    startPath: 'test/src',
    files: [ 'test/src/*.*' ],
    server: {
        baseDir: ['./'],
        middleware: function middleWare(req, res, next) {
            res.setHeader('Access-Control-Allow-Origin', '*');
            next();
        }
    }
});

gulpWatch({ name: 'watch', watchers: [
    { path: 'test/src/test.styl', tasks: ['stylus'] },
    { path: 'test/src/test.js', tasks: ['eslint'] }
]});

sequence('default', ['clean', [ 'stylus', 'eslint' ], 'watch']);

// Karma
// Git tag
// Create release
