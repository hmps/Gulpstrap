/**
 * GULP POLYFILLS
 *
 * These are polyfills for the various new APIs in Gulp 4. They are used to be
 * backwards compatible with Gulp 3.X.
 */
import gulp from 'gulp';
import runSequence from 'run-sequence';


/**
 * The class and the export really isn't used for anything else than testing. To
 * be able to test the polyfills they need to be available to the test runner,
 * so we export them via this class.
 */
class GulpPolyfill {
    constructor() {
        // gulp.series is a new api call to run a series of tasks in a set order.
        gulp.series = gulp.series || this.runSeriesSequence;
        // gulp.parallel is a new api call to run a series of task parallel to eachother
        gulp.parallel = gulp.parallel || this.runParallelSequence;
    }


    /**
     * runParallelSequence is a polyfill for gulp.parallel
     * @param  {rest paramters} ..._args should be a list of tasks
     */
    runParallelSequence(..._args) {
        // The return is wrapped in a function because Gulp 3 expects this format.
        return function parallelWrapper() {
            return runSequence(_args);
        };
    }

    /**
     * runSeriesSequence is a polyfill for gulp.series.
     * @param  {rest parameters} ..._args should be a list of tasks.
     */
    runSeriesSequence(..._args) {
        // The return is wrapped in a function because Gulp 3 expects this format.
        return function seriesWrapper() {
            return runSequence.apply(this, _args);
        };
    }
}

export default new GulpPolyfill();
