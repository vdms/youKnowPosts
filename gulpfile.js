var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
	browserSync = require('browser-sync').create(),
	markdown    = require('gulp-markdown'),
	marked      = require('marked'),
	inject      = require('gulp-inject'),
    debug       = require('gulp-debug'),
    tap         = require('gulp-tap'),
    path        = require('path'),
    rename      = require('gulp-rename'),
    foreach     = require('gulp-foreach');

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("./src/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./dist/css"))
        .pipe(browserSync.stream());
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
gulp.task('md-insert', function() {
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

                        gulp.src('./dist/' + fileName)
                        .pipe(debug())
                            .pipe(inject(
                                gulp.src('./src/md/' + fileName),  {
                                    starttag: '<!-- inject:head:{{ext}} -->',
                                    transform: function (filePath, file) {
                                        // return file contents as string
                                        return file.contents.toString('utf8')
                                    }
                                }
                            ))
                            .pipe(gulp.dest('./dist/'));
                    }))


            }))
  });

// Static Server + watching scss/html files
gulp.task('serve', ['sass', 'markdown', 'md-insert'], function() {

    browserSync.init({
        server: "./dist",
        directory: true
    });

    gulp.watch("./src/scss/*.scss", ['sass']);
    gulp.watch(['./_base.html'], ['md-insert']);
    gulp.watch(['./src/md/*.md'], ['md-insert']);
    gulp.watch("./src/*.html").on('change', browserSync.reload);
});


gulp.task('default', ['serve']);

// gulp.task('md-insert', function() {
//   return  gulp.src('./_base.html')
//             .pipe(inject(
//                 gulp.src(['./src/md/*.html']), {
//                     starttag: '<!-- inject:head:{{ext}} -->',
//                     transform: function (filePath, file) {
//                         // return file contents as string
//                         return file.contents.toString('utf8')
//                     }
//             }))
//             .pipe(gulp.dest('./dist/' + fileName + '.html'));
// });