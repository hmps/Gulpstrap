import { checkRequiredParams } from '../helpers';
import { Task } from './task';

import fs from 'fs';
import del from 'del';

class CleanTask {
    constructor(opts = {}) {
        this.name = 'clean';

        Task.checkRequiredParams(this.name, opts, ['paths']);

        if ( !Array.isArray(opts.paths) ) {
            opts.paths = [ opts.paths ];
        }

        return Task.addGulpTask(this.name, (cb) => {
            if ( fs.existsSync(opts.paths) ) {
                return del(opts.paths, cb);
            }

            cb();
        });
    }
}

function cleanFactory(opts = {}) {
    return new CleanTask(opts);
}

export default cleanFactory;
