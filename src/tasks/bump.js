import { Task } from '../task';

import bump from 'gulp-bump';
import args from '../args';

function bumpFactory(opts = {}) {
    opts.src = opts.src || './package.json';
    let reqParams = [];

    let ops = [
        { fn: bump, opts: { type: args.bump } },
        { gulpDest: opts.dest || './' }
    ];

    return new Task(opts.name || 'bump', opts, reqParams, ops);
}

export { bumpFactory as bump };
