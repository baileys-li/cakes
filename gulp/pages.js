import gulp from "gulp";
import pug from "gulp-pug";
import pugbem from "gulp-pugbem";

import { Path } from "./_const.js";

const isPretty = process.env.NODE_ENV === "development" ? true : false;

export function pages() {
	return gulp
		.src(Path.PAGE.source)
		.pipe(pug({ pretty: isPretty, plugins: [pugbem] }))
		.pipe(gulp.dest(Path.PAGE.build));
}
