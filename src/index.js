import './gulp-polyfill';
import gulp from 'gulp';
import stylus from './tasks/stylus';

console.log(stylus);

gulp.task('task1', function task1(cb) {
    setTimeout(() => {
        console.log('task1');
        cb();
    }, 1800);
});

gulp.task('task2', function task2(cb) {
    console.log('task2');
    return cb();
});

gulp.task('task3', function task3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('task3');
            resolve();
        }, 1100);
    });
});

gulp.task('parallel', gulp.parallel('task1', 'task2', 'task3'));
gulp.task('series', gulp.series('task1', 'task2', 'task3'));

export { stylus };
