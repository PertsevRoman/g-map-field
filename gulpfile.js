const gulp = require('gulp');
const gulpSourcemaps = require('gulp-sourcemaps');
const server = require('gulp-server-livereload');
const browserify = require('browserify');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const watch = require('gulp-watch');
const batch = require('gulp-batch');

const babelify= require('babelify');
const util = require('gulp-util');
const buffer = require('vinyl-buffer');
const source = require('vinyl-source-stream');
const stripCode = require('gulp-strip-code');
const uglify      = require('gulp-uglify');

const jsDest = './dist/js';

gulp.task('compile', function() {
    browserify(['./src/js/index.js'], { debug: true })
        .transform(babelify)
        .bundle()
        .on('error', util.log.bind(util, 'Browserify Error'))
        .pipe(source('index.js'))
        .pipe(buffer())
        .pipe(gulpSourcemaps.init({loadMaps: true}))
        .pipe(gulpSourcemaps.write('./'))
        .pipe(gulp.dest(jsDest));
});

gulp.task('compile-min', function () {
    browserify(['./src/js/index.js'], { debug: true })
        .transform(babelify)
        .bundle()
        .on('error', util.log.bind(util, 'Browserify Error'))
        .pipe(source('index.min.js'))
        .pipe(buffer())
        .pipe(gulpSourcemaps.init({loadMaps: true}))
        .pipe(stripCode({
            start_comment: "rem-block",
            end_comment: "end-rem-block"
        }))
        .pipe(uglify())
        .pipe(gulpSourcemaps.write('./'))
        .pipe(gulp.dest(jsDest));
});

gulp.task('default', ['compile', 'compile-min'], function() {
});

gulp.task('watch', function () {
    watch('./src/**/*.{less,js}', batch(function (events, done) {
        gulp.start('default', done);
    }));
});

gulp.task('webserver', ['watch'], function () {
    gulp.src('./example/')
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
            directoryListing: {
                directory: './example/'
            },
            open: true,
            port: 8001,
            defaultFile: 'index.html'
        }));
});