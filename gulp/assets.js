import gulp from "gulp";
import { Path } from "./_const.js";

export function assets() {
	return gulp.src(Path.ASSET.source).pipe(gulp.dest(Path.ASSET.build));
}
