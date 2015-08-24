import { Task } from '../task';

import del from 'del';

class CleanTask {
    constructor(opts = {}) {
        this.name = 'clean';

        Task.checkRequiredParams(this.name, opts, ['paths']);

        if ( !Array.isArray(opts.paths) ) {
            opts.paths = [ opts.paths ];
        }

        return Task.addGulpTask(this.name, (cb) => {
            return del(opts.paths, cb);
        });
    }
}

function cleanFactory(opts = {}) {
    return new CleanTask(opts);
}

export { cleanFactory as clean };
