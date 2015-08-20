import gulp from 'gulp';
import runSequence from 'run-sequence';

class Sequence {
    constructor(name, tasks) {
        this.name = 'sequence';

        if ( !Array.isArray(tasks) ) {
            tasks = [ tasks ];
        }

        gulp.task(name, () => {
            runSequence.apply(this, tasks );
        });
    }
}

function sequenceFactory(name, tasks) {
    return new Sequence(name, tasks);
}

export { sequenceFactory as sequence };
