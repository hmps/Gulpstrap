
/** Include strawpedo to call its methods */
var strawpedo = require('./dist/index');

/**
 * To set up a task, simply call the method and include an object with options.
 * Read instructions for each task to find required and optional options.
 */
strawpedo.eslint({name: 'eslint', src: 'test/src/*.js' });
strawpedo.stylus({
    name: 'stylus',
    src: 'test/src/*.styl',
    dest: 'test/dist/',
    stylus: {
        compress: false
    }
});



/**
 * It is recommended to give each task a name, but if you omit that property the
 * task will be given the same name as the task constructor. In the example below,
 * the name will be clean.
 */
strawpedo.clean({paths: ['test/dist']});



/**
 * Gulp watch is a special task that sets up a task with watchers. Each entry in
 * the watchers object will be added as a gulp.watch.
 */
strawpedo.watch({ name: 'watch', watchers: [
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
strawpedo.sequence('default', [[ 'stylus', 'eslint' ], 'watch']);
