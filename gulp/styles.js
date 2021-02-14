import gulp from "gulp";
import sass from "gulp-dart-sass";
import autoprefixer from "gulp-autoprefixer";
import shorthand from "gulp-shorthand";
import clean from "gulp-clean-css";
import plumber from "gulp-plumber";
import { Path } from "./_const.js";

export function styles() {
	if (process.env.NODE_ENV === "development") {
		return gulp
			.src(Path.STYLE.source, { sourcemaps: true })
			.pipe(plumber())
			.pipe(
				autoprefixer({
					cascade: true,
				})
			)
			.pipe(
				sass({
					outputStyle: "expanded",
					indentType: "tab"
				}).on("error", sass.logError)
			)
			.pipe(gulp.dest(Path.STYLE.build, { sourcemaps: "." }));
	} else {
		return gulp
			.src(Path.STYLE.source)
			.pipe(
				autoprefixer({
					cascade: false,
				})
			)
			.pipe(
				sass({
					outputStyle: "compressed",
				}).on("error", sass.logError)
			)
			.pipe(shorthand())
			.pipe(
				clean(
					{
						debug: true,
						compatibility: "*",
					},
					(details) => {
						console.log(
							`${details.name}: Original size: ${details.stats.originalSize} - Minified size: ${details.stats.minifiedSize}`
						);
					}
				)
			)
			.pipe(gulp.dest(Path.STYLE.build));
	}
}
