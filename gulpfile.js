import gulp from "gulp";
import shell from "gulp-shell";

gulp.task("parcel", shell.task(["parcel serve starter/index.html"]));


gulp.task("test", shell.task(["npx mocha"]));

gulp.task("default", gulp.series("parcel"));

gulp.task('cypress', shell.task(['npx cypress run']));

