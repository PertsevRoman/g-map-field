const gulp = require('gulp');
const gulpLess = require('gulp-less');
const gulpSourcemaps = require('gulp-sourcemaps');
const server = require('gulp-server-livereload');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const watch = require('gulp-watch');
const batch = require('gulp-batch');

const cssDest = './dist/css';
const jsDest = './dist/js';

const externalLibs = [
    'node_modules/jquery/dist/jquery.js',
    'node_modules/bootstrap/dist/js/bootstrap.js'
];
const libsFileName = 'libs.js';

gulp.task('concat', function () {
    gulp.src(externalLibs)
        .pipe(concat(libsFileName))
        .pipe(gulp.dest(jsDest));
});

gulp.task('less', function () {
    gulp
        .src('src/less/base.less')
        .pipe(gulpSourcemaps.init())
        .pipe(gulpLess())
        .pipe(gulpSourcemaps.write())
        .pipe(gulp.dest(cssDest));
});

gulp.task('compile', function () {
    gulp
        .src('src/js/index.js')
        .pipe(babel({
            presets: ['es2015'],
            plugins: ['transform-class-properties']
        }))
        .pipe(gulp.dest(jsDest));
});

gulp.task('default', ['less', 'compile', 'concat'], function() {
});

gulp.task('watch', function () {
    watch('./src/**/*.{less,js}', batch(function (events, done) {
        gulp.start('default', done);
    }));
});

gulp.task('webserver', ['watch'], function () {
    gulp.src('.')
        .pipe(server({
            livereload: true,
            directoryListing: true,
            open: true,
            defaultFile: 'index.html'
        }));
});