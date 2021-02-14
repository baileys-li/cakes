import gulp from "gulp";

import stylelint from "gulp-stylelint";

import pugLinter from "gulp-pug-linter";
import { htmlValidator } from "gulp-w3c-html-validator";
import bemValidator from "gulp-html-bem-validator";

import { Path } from "./_const.js";

export const lint = gulp.series(lintStyles, lintPug, lintHTML);

function lintStyles() {
	return gulp.src(Path.STYLE.source).pipe(
		stylelint({
			failAfterError: false,
			reporters: [
				{
					formatter: "string",
					console: true,
				},
			],
		})
	);
}

function lintPug() {
	return gulp.src(Path.PAGE.source).pipe(pugLinter({ reporter: "default" }));
}

function lintHTML() {
	return gulp
		.src(Path.PAGE.build)
		.pipe(htmlValidator.analyzer())
		.pipe(htmlValidator.reporter())
		.pipe(bemValidator());
}
