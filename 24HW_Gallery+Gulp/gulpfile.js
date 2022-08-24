const { src, dest, series, watch } = require('gulp');
const concat = require('gulp-concat');
const clean = require('gulp-clean');
const uglify = require('gulp-uglify');


function cleanDestTask() {
    return src('./dest', { read: false, allowEmpty: true }).pipe(clean());
}

function copyJs() {
    return src([
        './src/Album.js',
        './src/Albums.js',
        './src/module/LinksCollection.js',
        './src/module/AlbumsCollection.js',
        './src/view/LinksView.js',
        './src/view/AlbumsView.js',
        './src/controller/LinksController.js',
        './src/controller/AlbumsController.js',
        './src/app.js',
    ], { sourcemaps: true })
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(dest('./dest', { sourcemaps: true }))
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

function watchFiles() {
    return watch(['./src/**/*.js'], { ignoreInitial: false }, () => copyJs());
}

module.exports.build = series(cleanDestTask, copyJs, copyVendorJs, copyHtml, copyCss);
module.exports.serve = series(cleanDestTask, copyJs, copyVendorJs, copyHtml, copyCss, watchFiles);