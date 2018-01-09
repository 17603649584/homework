//获取gulp对象
var gulp = require("gulp");

//导入插件

var uglify = require("gulp-uglify"); //js压缩插件
var babel = require('gulp-babel'); //es6转es5
var minifyCss = require('gulp-minify-css');//压缩CSS
//定义任务
//gulp.task("htmlTask", function(){
//	gulp.src("02_dafeiji.html")
//		.pipe( htmlmin(obj) ) //使用插件htmlmin
//		.pipe( gulp.dest("dest/html") );
//})

//压缩CSS
gulp.task('cssTask', function(){
	gulp.src('src/css/*')
	.pipe(minifyCss())
	.pipe(gulp.dest('dest/css'));
});


//压缩js的插件
gulp.task("jsTask", function(){
	gulp.src("src/js/*.js")
		.pipe(babel({"presets": ["es2015"]})) //es6转es5
		.pipe( uglify() ) //使用插件uglify
		.pipe( gulp.dest("dest/js") );
})

//默认任务
gulp.task("default", ["cssTask","jsTask"]);
