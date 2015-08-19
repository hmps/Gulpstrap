import gulp from 'gulp';


/**
 * Pipeline class
 */

var pipelineFactory = {
    create(src) {
        if (!src) { throw new Error('All task needs a src parameter.'); }

        this.pipeline = gulp.src(src);

        return this;
    },
    addPipe(params = {}) {
        if ( params.if || params.hasOwnProperty('if') === false ) {
            this.pipeline = this.pipeline.pipe(params.fn(params.opts));
        }

        return this;
    }
}


function checkRequiredParams(name, opts, params) {
    params.forEach((item) => {
        if (!opts.hasOwnProperty(item)) {
            throw new Error(`${item} is a required param for ${name} task`);
        }
    });
}

export {
    pipelineFactory,
    checkRequiredParams
};
