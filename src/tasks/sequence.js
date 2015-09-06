import { Task } from '../task';

import gulp from 'gulp';
import runSequence from 'run-sequence';

class Sequence {
    constructor(opts = {}) {
        Task.checkRequiredParams('Sequence', opts, ['name', 'tasks']);

        if ( !Array.isArray(opts.tasks) ) {
            opts.tasks = [ opts.tasks ];
        }

        gulp.task(opts.name, () => {
            runSequence.apply(this, opts.tasks );
        });
    }
}

function sequenceFactory(name, tasks) {
    return new Sequence({
        name,
        tasks
    });
}

export { sequenceFactory as sequence };
