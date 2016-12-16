const gulp = require('gulp');
const gulpLess = require('gulp-less');
const gulpSourcemaps = require('gulp-sourcemaps');
const server = require('gulp-server-livereload');
const browserify = require('browserify');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const watch = require('gulp-watch');
const batch = require('gulp-batch');
const tpl2js = require('gulp-vue-template2js');

const babelify= require('babelify');
const util = require('gulp-util');
const buffer = require('vinyl-buffer');
const source = require('vinyl-source-stream');


const cssDest = './dist/css';
const jsDest = './dist/js';

gulp.task('compile', function() {
    browserify(['./src/js/index.js'], { debug: true })
        .add(require.resolve('./node_modules/babel-polyfill/dist/polyfill'))
        .transform(babelify)
        .bundle()
        .on('error', util.log.bind(util, 'Browserify Error'))
        .pipe(source('index.js'))
        .pipe(buffer())
        .pipe(gulpSourcemaps.init({loadMaps: true}))
        .pipe(gulpSourcemaps.write('./'))
        .pipe(tpl2js())
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

gulp.task('default', ['less', 'compile'], function() {
});

gulp.task('watch', function () {
    watch('./src/**/*.{less,js}', batch(function (events, done) {
        gulp.start('default', done);
    }));
});

gulp.task('webserver', ['watch'], function () {
    gulp.src('.')
        .pipe(server({
            livereload: {
                enable: true,
                filter: function(filePath, cb) {
                    cb(
                        !(/node_modules/.test(filePath)) &&
                            (/.(html|less|css|js)/.test(filePath)) &&
                            !(/.(json|gitignore|babelrc|git)/.test(filePath))
                    )
                }
            },
            directoryListing: true,
            open: true,
            defaultFile: 'index.html'
        }));
});