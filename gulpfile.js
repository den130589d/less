var gulp = require('gulp');
var connect = require('gulp-connect');
var livereload = require('gulp-livereload');
var less = require('gulp-less');

gulp.task('missionZero', function(){
	connect.server({
		root: 'build/',
		livereload: true
	});
});
gulp.task('less',function(){
	gulp.src('general.less')
		.pipe(less())
		.pipe(gulp.dest('css/'));
});