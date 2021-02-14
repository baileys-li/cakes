import gulp from "gulp";
import { styles } from "./styles.js";
import { pages } from "./pages.js";
import { images } from "./images.js";
import { assets } from "./assets.js";
import { clean } from "./clean.js";

export const startProject = gulp.series(
	clean,
	gulp.parallel(pages, styles, images, assets)
);
