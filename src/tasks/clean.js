import { checkRequiredParams } from '../helpers';
import gulp from 'gulp';
import del from 'del';

class Clean {
    constructor() {
        this.name = 'clean';
    }

    setupTask(opts = {}) {
        checkRequiredParams(this.name, opts, ['paths']);

        if ( !Array.isArray(opts.paths) ) {
            opts.paths = [ opts.paths ];
        }

        return gulp.task(opts.name || this.name, (cb) => {
            return del(opts.paths, cb);
        });
    }
}

export default new Clean();
