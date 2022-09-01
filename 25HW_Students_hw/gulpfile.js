const { src, dest, series, parallel, watch } = require('gulp');
const concat = require('gulp-concat');
const clean = require('gulp-clean');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();

function cleanDestTask() {
    return src('./dest', { read: false, allowEmpty: true }).pipe(clean());
}

function copyJs() {
    return src([
        './src/Students.js',
        './src/module/Collection.js',
        './src/view/View.js',
        './src/controller/Controller.js',
        './src/index.js',
    ], { sourcemaps: true })
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(dest('./dest', { sourcemaps: '.' }))
}

function copyVendorJs() {
    return src([
        './node_modules/jquery/dist/jquery.min.js',
    ])
        .pipe(concat('vendor.js'))
        .pipe(dest('./dest'))
}

function copyHtml() {
    return src('./src/index.html').pipe(dest('./dest'))
}

function copyCss() {
    return src('./src/style.css').pipe(dest('./dest'))
}

function serve() {
    browserSync.init({
        server: {
            baseDir: "./dest"
        }
    });

    watch(['./src/**/*.js'], { ignoreInitial: false }, series(copyJs, reloadBrowser));
    watch(['./src/*.css'], { ignoreInitial: false }, series(copyCss, reloadBrowser));
}

function reloadBrowser(done) {
    browserSync.reload()
    done();
}

function taskBuild() {
    return series(
        cleanDestTask,
        parallel(
            copyJs,
            copyHtml,
            copyCss,
            copyVendorJs
        ),
    );
}

function taskServe() {
    return series(taskBuild(), serve);
}

module.exports.build = taskBuild();
module.exports.serve = taskServe();