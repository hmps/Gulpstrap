import { pipelineFactory, checkRequiredParams } from '../helpers';
import gulp from 'gulp';
import eslint from 'gulp-eslint';

class ESLint {
    constructor() {
        this.name = 'eslint';
    }

    setupTask(opts = {}) {
        checkRequiredParams(this.name, opts, ['src']);

        return gulp.task(opts.name || this.name, () => {
            let pipeline = pipelineFactory.create(opts.src);

            pipeline
                .addPipe({ fn: eslint, opts: opts.eslint })
                .addPipe({ fn: eslint.format });

            return pipeline.pipeline;
        });
    }
}

export default new ESLint();
