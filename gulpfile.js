import gulp from "gulp";
import { setDevelopment, setProduction } from "./gulp/setMode.js";
import { startProject } from "./gulp/startProject.js";
import { serve } from "./gulp/serve.js";
import { lint } from "./gulp/lint.js";

import { publishOnGitHubPages } from "./gulp/ghPages.js";

export const test = lint;
export const build = gulp.series(setProduction, startProject);
export const deploy = publishOnGitHubPages;
export default gulp.series(setDevelopment, startProject, serve);
