import autoprefixer from 'gulp-autoprefixer';
import { checkNecessaryParams } from '../helpers';
import pipelineFactory from '../pipeline';
import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import stylus from 'gulp-stylus';

class Stylus {
    constructor() {
        this.name = 'stylus';
    }

    setupTask(opts = {}) {
        checkNecessaryParams(this.name, opts, ['src', 'dest']);

        return gulp.task(opts.name || this.name, () => {
            let pipeline = pipelineFactory.create(opts.src);

            pipeline
                .addPipe({ if: opts.sourcemaps, fn: sourcemaps.init })
                .addPipe({ if: opts.sourcemaps, fn: sourcemaps.init })
                .addPipe({ fn: stylus, opts: opts.stylus })
                .addPipe({ if: opts.autoprefixer, fn: autoprefixer })
                .addPipe({ if: opts.sourcemaps, fn: sourcemaps.write, opts: '.' })
                .addPipe({ fn: gulp.dest, opts: opts.dest });

            return pipeline.pipeline;
        });
    }
}

export default new Stylus();
