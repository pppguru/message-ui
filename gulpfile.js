var cssnano = require('gulp-cssnano');
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var imageop = require('gulp-image-optimization');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

gulp.task('serve', ['sass', 'compress'], function() {
  gulp.watch("./client/assets/scss/**/*.scss", ['sass']);
  gulp.watch('./client/assets/js/main.js', ['compress']);
});

gulp.task('sass', function() {
  return gulp.src("./client/assets/scss/website/main.scss")
    .pipe(plumber({
      errorHandler: function (err) {
        console.log(err);
        this.emit('end');
      }
    }))
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cssnano())
    .pipe(gulp.dest("./public/css"));
});

gulp.task('images', function(cb) {
    gulp.src(['./client/assets/img/**/*.png','./client/assets/img/**/*.jpg','./client/assets/img/**/*.gif','./client/assets/img/**/*.jpeg']).pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest('./public/img/website')).on('end', cb).on('error', cb);
});

gulp.task('compress', function() {
    return gulp.src([
        './client/assets/js/jquery-2.1.4.min.js',
        './client/assets/js/vendor/*.js',
        './client/assets/js/main.js'])
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('./public/js'))
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./public/js'));
});
