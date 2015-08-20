import { pipelineFactory } from './helpers';
import gulp from 'gulp';

class Task {
    constructor(name, opts, reqParams, ops) {

        Task.checkForErrors(name, opts, reqParams);
        Task.checkRequiredParams(name, opts, reqParams);


        return gulp.task(name, () => {
            let pipeline = pipelineFactory.create(opts.src);

            ops.forEach(op => {
                if ( op.hasOwnProperty('gulpDest') ) {
                    [ op.fn, op.opts ] = [ gulp.dest, op.gulpDest ];
                }

                pipeline.addPipe(op);
            });

            return pipeline.pipeline;
        });
    }

    static addGulpTask(name, fn) {
        Task.checkForErrors(name);

        return gulp.task(name, fn);
    }

    static checkRequiredParams(name, opts, params) {
        params.forEach((item) => {
            if (!opts.hasOwnProperty(item)) {
                throw new Error(`${item} is a required param for ${name} task`);
            }
        });
    }

    static checkForErrors(name) {
        if ( !name || !name.length ) {
            throw 'A name is required for all tasks';
        }

        if ( Task.checkDuplicateTasks(name) ) {
            throw `A task with the name ${name} has already been registered.`;
        }
    }

    static checkDuplicateTasks(name) {
        return gulp.tasks.hasOwnProperty(name);
    }
}

export { Task };
