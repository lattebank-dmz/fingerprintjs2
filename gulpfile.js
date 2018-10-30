const gulp = require('gulp')
const uglify = require('gulp-uglify')
const rev = require('gulp-rev')


gulp.task('minify', function () {
  return gulp
      .src('fingerprint2.js')
      .pipe(rev())
      .pipe(uglify({
        compress: {
          global_defs: {}
        },
        output: {
          ascii_only: true
        }
      })
      .on('error', function (e) {
        console.log(e)
      }))
      .pipe(gulp.dest('dist/'))
})
