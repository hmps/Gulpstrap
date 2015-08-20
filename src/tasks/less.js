import { Task } from '../task';

import autoprefixer from 'gulp-autoprefixer';
import sourcemaps from 'gulp-sourcemaps';
import less from 'gulp-less';

function lessFactory(opts = {}) {
    let ops = [
        { if: opts.sourcemaps, fn: sourcemaps.init },
        { fn: less, opts: opts.less },
        { if: opts.autoprefixer, fn: autoprefixer },
        { if: opts.sourcemaps, fn: sourcemaps.write, opts: '.' },
        { gulpDest: opts.dest }
    ];
    let reqParams = ['src', 'dest'];

    return new Task(opts.name || 'less', opts, reqParams, ops);
}

export { lessFactory as less };
