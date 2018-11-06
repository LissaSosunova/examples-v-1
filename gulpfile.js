const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const rimraf = require('rimraf');
const browserSync = require('browser-sync');
const reload = browserSync.reload;
const historyFallback = require('connect-history-api-fallback');

let paths = {
    js: 'app/**/*.js',
    sass: {
        blocks: 'app/src/**/*.sass',
        common: 'app/sass/**/*.sass'
    },
    css: {
        libs: 'app/libs/**/*.css',
        main: 'app/css/**/*.css'
    },
    bundle: {
        js: [
            './libs/vendors/angular.js',
            './libs/vendors/angular-ui-router.js',
            './libs/vendors/angular-resource.js'
        ]
    }
};

gulp.task('js', function() {
    return gulp.src(paths.js)
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./bin/js'))
        .pipe(reload({ stream: true }));
});
gulp.task('css', function() {
    return gulp.src('./app/**/*.css')
        .pipe(concat('main.css'))
        .pipe(gulp.dest('./bin/css'))
        .pipe(reload({ stream: true }));
});
gulp.task('sass', function () {
    return gulp.src([
        paths.sass.blocks,
        paths.sass.common])
        .pipe(sass({
            outputStyle: 'compressed'
        }).on("error", sass.logError))
        .pipe(concat('main.css'))
        .pipe(gulp.dest('bin/css'))
        .pipe(reload({ stream: true }));
});

gulp.task('clean', function del(cb) {
    return rimraf('bin', cb);
});

gulp.task('bundle:js', function() {
    return gulp.src(paths.bundle.js)
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('./bin/vendor/'));
});

gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: "./"
        },
        middleware: [
            historyFallback()
        ],
        port: 4900,
        open: true,
        notify: false
    });
});

gulp.task('watch',['js', 'sass', 'css', 'bundle:js'], function () {
    gulp.watch(paths.js, ['js']);
    gulp.watch([paths.sass.common, paths.sass.blocks], ['sass']);
    gulp.start('browserSync');
});

gulp.task('build', ['js', 'sass', 'css', 'bundle:js']);
