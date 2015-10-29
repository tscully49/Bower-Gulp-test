//include gulp

var gulp = require('gulp');
var gutil = require('gulp-util');

// base folders
//var src = 'src/';
//var dest = 'build/';

// include plugins
/* Old gulp test plugins
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
*/

var plugins = require("gulp-load-plugins")({
  pattern: ['gulp-*', 'gulp.*', 'main-bower-files'],
  replaceString: /\bgulp[\-.]/
});

var destination = 'www/public/';

gulp.task('js', function() {
  var jsFiles = ['src/js/*'];
  
  gulp.src(plugins.mainBowerFiles().concat(jsFiles))
    .pipe(plugins.filter('*.js'))
    .pipe(plugins.concat('main.js'))
    .pipe(plugins.uglify()).on('error', gutil.log)
    .pipe(gulp.dest(destination + 'js'));
});

gulp.task('default', ['js']);

/*  Old test gulp functions
//concatenate & minify JS files
gulp.task('scripts', function() {
  return gulp.src('src + js/*.js')
    .pipe(concat('main.js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('build + js'));
});

//watch for changes in files
gulp.task('watch', function() {
  // Watch js files
  gulp.watch(src + 'js/*.js', ['scripts']);
});

//Default task
gulp.task('default', ['scripts', 'watch']);

*/
