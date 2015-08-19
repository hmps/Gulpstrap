import { checkRequiredParams } from '../helpers';
import gulp from 'gulp';
import runSequence from 'run-sequence';

class Sequence {
    constructor() {
        this.name = 'sequence';
    }

    parallell(name, tasks) {
        // checkRequiredParams(this.name, arguments, ['src']);
        if ( !Array.isArray(tasks) ) {
            tasks = [ tasks ];
        }

        gulp.task(name, () => {
            runSequence.apply(this, [ tasks ]);
        });
    }

    serial(name, tasks) {
        // checkRequiredParams(this.name, arguments, ['src']);
        if ( !Array.isArray(tasks) ) {
            tasks = [ tasks ];
        }

        gulp.task(name, () => {
            runSequence.apply(this, tasks);
        });
    }
}

export default new Sequence();
