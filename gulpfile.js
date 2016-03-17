var gulp = require('gulp');
var del = require('del');
var sass = require('gulp-sass');
var cssminify = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');

//server load
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

//react
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

var config = {
	app: "app",
	temp: "tmp",
	dest: "dest"
};

//react task
gulp.task('browserify', function(){
	browserify(config.app + "/jsx/app.jsx", {debug: true})
		.transform(babelify,{presets: ["es2015","react"]})
		.bundle()
		.on("error", function (err) { console.log("Error : " + err.message); })
		.pipe(source("bundle.js"))
		.pipe(gulp.dest(config.temp+"/js"));
});

//server task
gulp.task('browserSync', ['clean'], function() {
    browserSync.init({
        server: {
            baseDir: "./tmp"
        }
    });

	return gulp.watch([
				config.app + '/*.html',
				config.app + '/js/*.js',
				config.app + '/jsx/{*, */*, */*/*}.jsx',
				config.app + '/scss/{*, */*, */*/*}.scss'
			], ['browserify', 'sass', 'copy']).on("change", reload);
});


gulp.task('sass', function(){
	return gulp.src(config.app + '/scss/{*, */*, */*/*}.scss')
			   .pipe(sass({
						outputStyle: 'expanded',
						precision: 10,
						errLogToConsole: true
	                }).on('error', sass.logError)
				)
			   .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
			   .pipe(gulp.dest(config.temp + '/css'));
});

//copy task
gulp.task('copy', function(){
	return gulp.src([
					config.app + '/*.html',
					config.app + '/js/*.js'
				], { base: config.app })
			   .pipe(gulp.dest(config.temp));
});


//dist tasks
gulp.task('dist:css', function(){
	return gulp.src(config.temp + '/css/*.css')
			   .pipe(cssminify())
			   .pipe(gulp.dest(config.dest + '/css'));
});

gulp.task('dist:copy', function(){
	return gulp.src([
					config.temp + '/*.html',
					config.temp + '/js/*.js',
				], { base: config.temp })
			   .pipe(gulp.dest(config.dest));
});


//clean task
gulp.task('clean', function(cb){
    return del(['tmp', 'dest'], {force: true, read: false}, cb);
});

gulp.task('server', ['browserSync'], function(){
	gulp.start(['copy', 'sass']);
});

gulp.task('build', ['dist:copy', 'dist:css']);
