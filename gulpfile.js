var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-ruby-sass'),
    connect = require('gulp-connect'),
    imagemin = require('gulp-imagemin');

gulp.task('minify',function(){
    gulp.src('js/*js')
    .pipe(uglify())
    .pipe(gulp.dest('minjs'));
});

gulp.task('sass', function () {
  return sass('scss/**/*.scss')
    .on('error', function (err) { console.log(err.message); })
    // .pipe(sass({
    //  style: 'compressed'
    // }))
    .pipe(gulp.dest('css/'))
    .pipe(connect.reload());
});

gulp.task('image',function(){
gulp.src('img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('build/img'));
});


gulp.task('connect',function(){
    connect.server({
        livereload: true
    });
});

gulp.task('watch', function(){
    gulp.watch('js/*.js',['minify']);   
    gulp.watch('scss/**/*.scss', ['sass']);   
});

gulp.task('default',['minify','sass','watch','connect']);
