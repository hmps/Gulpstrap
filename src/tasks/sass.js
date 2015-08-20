import { Task } from '../task';

import autoprefixer from 'gulp-autoprefixer';
import sourcemaps from 'gulp-sourcemaps';
import sass from 'gulp-ruby-sass';

/**
 * Ruby sass doesn't use the gulp.src pattern anymore.
 *
 * @TODO
 * Make separate class
 *
 */

function sassFactory(opts = {}) {
    let ops = [
        { if: opts.sourcemaps, fn: sourcemaps.init },
        { fn: sass, opts: opts.sass },
        { if: opts.autoprefixer, fn: autoprefixer },
        { if: opts.sourcemaps, fn: sourcemaps.write, opts: '.' },
        { gulpDest: opts.dest }
    ];
    let reqParams = ['src', 'dest'];

    return new Task(opts.name || 'sass', opts, reqParams, ops);
}

export { sassFactory as sass };
