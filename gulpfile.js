var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
	browserSync = require('browser-sync').create(),
	markdown    = require('gulp-markdown'),
	marked      = require('marked'),
	gfi         = require("gulp-file-insert"),
    debug       = require('gulp-debug'),
    tap         = require('gulp-tap'),
    path        = require('path'),
    rename      = require('gulp-rename'),
    clean       = require('gulp-clean'),
    run         = require('run-sequence'),
    foreach     = require('gulp-foreach');

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("./src/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./dist/css"))
        .pipe(browserSync.stream());
});

gulp.task('clean', function () {
	return gulp.src([
            './dist/*.html',
            './src/md/*.html'], {read: false})
            .pipe(clean());
});

// Markdown related
marked.setOptions({
    gfm: true,
    sanitize: true,
    smartypants: true
});

// Compila markdown
gulp.task('markdown', function() {
    return gulp.src('./src/md/*.md')
                .pipe(markdown())
                .pipe(gulp.dest(function(f) {
                    return f.base;
                }));
});

// Make a copy for each compiled md content
gulp.task('create', function() {
  return gulp.src('./src/md/*.html')
            .pipe(foreach(function(stream, file) {
                return stream
                    .pipe(tap(function (file,t) {
                        var fileName = path.basename(file.path).toString();
                        gulp.src('./_base.html')
                            .pipe(rename(fileName))
                            .pipe(gulp.dest('./dist', {
                                overwrite: true
                            }));
                    }))
        }))
});

gulp.task('inject', function() {
    return gulp.src('./dist/*.*')
                .pipe(debug())
                .pipe(foreach(function(stream, file) {
                    return stream
                        .pipe(tap(function (file, t) {
                                var fileName = path.basename(file.path).toString();
                                var filePath = file.path;
                                gulp.src(filePath)
                                    .pipe(gfi({"<!-- post content -->" : "./src/md/" + fileName}))
                                    .pipe(gulp.dest('./dist/'))
                        }))
                }))
});

gulp.task('build', function(callback) {
  run('clean', 'markdown', 'create', ['inject'], function() {
      callback();
  });
});

// Static Server + watching scss/html files
gulp.task('serve', ['sass', 'build'], function() {

    browserSync.init({
        server: "./dist",
        directory: true
    });

    gulp.watch("./src/scss/*.scss", ['sass']);
    gulp.watch(['./_base.html'], ['build']);
    gulp.watch(['./src/md/'], ['build']);
    gulp.watch("./src/*.html").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
