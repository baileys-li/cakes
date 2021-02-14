import ghpages from "gh-pages";
import { Path } from "./_const.js";

export function publishOnGitHubPages(cb) {
	ghpages.publish(Path.PAGE.build, cb());
}
