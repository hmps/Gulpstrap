
/* Include all the types of tasks that you need in your project */
/* These are just a few examples */
var eslint = require('./dist/tasks/eslint');
var stylus = require('./dist/tasks/stylus');
var clean = require('./dist/tasks/clean');

var sequence = require('./dist/tasks/sequence');
var gulpWatch = require('./dist/tasks/watch');



/**
 * To set up a task, simply call the method and include an object with options.
 * Read instructions for each task to find required and optional options.
 */
eslint({name: 'eslint', src: 'test/src/*.js' });
stylus({
    name: 'stylus',
    src: 'test/src/*.styl',
    dest: 'test/dist/',
    stylus: {
        use: nib(),
        compress: false
    }
});



/**
 * It is recommended to give each task a name, but if you omit that property the
 * task will be given the same name as the task constructor. In the example below,
 * the name will be clean.
 */
clean({paths: ['test/dist']});



/**
 * Gulp watch is a special task that sets up a task with watchers. Each entry in
 * the watchers object will be added as a gulp.watch.
 */
gulpWatch({ name: 'watch', watchers: [
    { path: 'test/src/test.styl', tasks: ['stylus'] },
    { path: 'test/src/test.js', tasks: ['eslint'] }
]});



/**
 * Sequence is the other special type of task. A sequence task will run all tasks
 * given as the second argument.
 * Tasks will be run in series, except if they are enclosed in a second array, in
 * which case they will run in parallell.
 *
 * @example
 * [ 'task1', 'task2', [ 'task3', 'task4' ], 'task5' ];
 *
 * Task 1 will run first. When it completes
 * Task 2 will run. When it completes
 * Task3 and Task4 will run in parallel. When they have both completed
 * Task 5 will run
 */
sequence('default', [[ 'stylus', 'eslint' ], 'watch']);
