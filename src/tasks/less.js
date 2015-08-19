import autoprefixer from 'gulp-autoprefixer';
import { pipelineFactory, checkRequiredParams } from '../helpers';
import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import less from 'gulp-less';

class Less {
    constructor() {
        this.name = 'less';
    }

    setupTask(opts = {}) {
        checkRequiredParams(this.name, opts, ['src', 'dest']);

        return gulp.task(opts.name || this.name, () => {
            let pipeline = pipelineFactory.create(opts.src);

            pipeline
                .addPipe({ if: opts.sourcemaps, fn: sourcemaps.init })
                .addPipe({ fn: less, opts: opts.less })
                .addPipe({ if: opts.autoprefixer, fn: autoprefixer })
                .addPipe({ if: opts.sourcemaps, fn: sourcemaps.write, opts: '.' })
                .addPipe({ fn: gulp.dest, opts: opts.dest });

            return pipeline.pipeline;
        });
    }
}

export default new Less();
