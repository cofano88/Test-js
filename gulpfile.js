const gulp = require("gulp");
const uglify = require("gulp-uglify");
const csso = require("gulp-csso");
const htmlmin = require("gulp-htmlmin");
const connect = require("gulp-connect");

function compress_js() {
  return gulp
    .src("src/js/**/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("prod/js"))
    .pipe(connect.reload());
}

function compress_css() {
  return gulp
    .src("src/css/**/*.css")
    .pipe(csso())
    .pipe(gulp.dest("prod/css"))
    .pipe(connect.reload());
}

function compress_html() {
  return gulp
    .src("src/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("prod"))
    .pipe(connect.reload());
}

function watch() {
  gulp.watch("src/js/**/*.js", compress_js);
  gulp.watch("src/css/**/*.css", compress_css);
  gulp.watch("src/*.html", compress_html);
}

gulp.task("connect", function() {
  connect.server({
    root: "prod",
    livereload: true
  });
});

exports.compress_js = compress_js;
exports.compress_css = compress_css;
exports.compress_html = compress_html;
exports.watch = watch;
