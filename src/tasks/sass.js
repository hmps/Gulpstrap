import autoprefixer from 'gulp-autoprefixer';
import { pipelineFactory, checkRequiredParams } from '../helpers';
import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import sass from 'gulp-ruby-sass';

class Sass {
    constructor() {
        this.name = 'sass';
    }

    setupTask(opts = {}) {
        checkRequiredParams(this.name, opts, ['src', 'dest']);

        return gulp.task(opts.name || this.name, () => {
            let pipeline = pipelineFactory.create(opts.src);

            opts.sass = opts.sass || opts.src;

            pipeline
                .addPipe({ if: opts.sourcemaps, fn: sourcemaps.init })
                .addPipe({ fn: sass, opts: opts.sass })
                .addPipe({ if: opts.autoprefixer, fn: autoprefixer })
                .addPipe({ if: opts.sourcemaps, fn: sourcemaps.write, opts: '.' })
                .addPipe({ fn: gulp.dest, opts: opts.dest });

            return pipeline.pipeline;
        });
    }
}

export default new Sass();
