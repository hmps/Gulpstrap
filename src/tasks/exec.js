import { Task } from '../task';

import { exec } from 'child_process';

class ExecTask {
    constructor(opts = {}) {
        this.name = opts.name || 'exec';

        Task.checkRequiredParams(this.name, opts, ['cmd']);

        return Task.addGulpTask(this.name, (cb) => {
            if ( opts.message ) { console.log(opts.message); }

            exec(opts.cmd, (err, stdout) => {
                if ( opts.stdout ) { console.log(stdout); }

                if ( err ) { console.log(err); }

                cb(err);
            });
        });
    }
}

function execFactory(opts = {}) {
    return new ExecTask(opts);
}

export { execFactory as exec };
