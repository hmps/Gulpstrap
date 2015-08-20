import { Task } from '../task';
import gulp from 'gulp';
// watch(path: 'test/src/test.styl', tasks: ['stylus']);

function watchFactory(opts = {}) {

    checkForErrors(opts);

    return Task.addGulpTask(opts.name || 'watch', () => {
        opts.watchers.forEach(watcher => {
            if ( !Array.isArray(watcher.tasks) ) {
                watcher.tasks = [ watcher.tasks ];
            }

            gulp.watch(watcher.path, watcher.tasks);
        });
    });

}

function checkForErrors(opts) {
    if ( !opts.hasOwnProperty('watchers') ) {
        if ( !opts.hasOwnProperty('tasks') ) {
            throw 'A watcher needs at least one task to execute.';
        }

        if ( !opts.hasOwnProperty('path') ) {
            throw 'A watcher needs at least one task to execute.';
        }

        opts.watchers = [ { path: opts.path, tasks: opts.tasks }];

    } else if ( Array.isArray(opts.watchers) && !opts.watchers.length ) {
        throw 'You need to provide at least one watch job.';
    }
}

export { watchFactory as watch };
