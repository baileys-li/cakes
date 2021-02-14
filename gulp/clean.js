import del from "del";

import { Path } from "./_const.js";

export async function clean() {
	return del(Path.PAGE.build);
}

