var gulp = require('gulp');
var markdown = require('gulp-markdown');
var marked = require('marked');

marked.setOptions({
    gfm: true,
    sanitize: true,
    smartypants: true
});

gulp.task('markdown', function() {
    return gulp.src('**/*.md')
        .pipe(markdown())
        .pipe(gulp.dest(function(f) {
            return f.base;
        }));
});

gulp.task('default', function() {
    gulp.watch('**/*.md', ['markdown']);
});