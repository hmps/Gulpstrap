import { Task } from '../task';

import autoprefixer from 'gulp-autoprefixer';
import sourcemaps from 'gulp-sourcemaps';
import stylus from 'gulp-stylus';

function stylusFactory(opts = {}) {
    let ops = [
        { if: opts.sourcemaps, fn: sourcemaps.init },
        { fn: stylus, opts: opts.stylus },
        { if: opts.autoprefixer, fn: autoprefixer },
        { if: opts.sourcemaps, fn: sourcemaps.write, opts: '.' },
        { gulpDest: opts.dest }
    ];
    let reqParams = ['src', 'dest'];

    return new Task(opts.name || 'stylus', opts, reqParams, ops);
}

export { stylusFactory as stylus };
