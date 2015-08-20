import { Task } from './task';

function copyFactory(opts = {}) {
    let reqParams = ['src', 'dest'];

    let ops = [
        { gulpDest: opts.dest }
    ];

    return new Task(opts.name || 'copy', opts, reqParams, ops);
}

export default copyFactory;
