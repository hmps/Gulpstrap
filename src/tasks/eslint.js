import { Task } from './task';

import eslint from 'gulp-eslint';

function eslintFactory(opts = {}) {
    let ops = [
        { fn: eslint, opts: opts.eslint },
        { fn: eslint.format }
    ];
    let reqParams = ['src'];

    return new Task(opts.name || 'eslint', opts, reqParams, ops);
}

export default eslintFactory;
