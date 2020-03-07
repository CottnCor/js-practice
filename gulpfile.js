const gulp = require('gulp');
const clean = require('gulp-clean');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');

gulp.task('ts', function() {
    gulp.src('dist/*.js').pipe(clean());
    return tsProject
        .src()
        .pipe(tsProject())
        .js.pipe(gulp.dest('dist/'));
});

gulp.task('watch', function() {
    return gulp.watch('src/*.ts', { delay: 500 }, gulp.series('ts'));
});

gulp.task(
    'default',
    gulp.series('ts', async () => {
        await console.log('😊 😊 😊 😊 😊  gulp done ！！！');
    })
);
