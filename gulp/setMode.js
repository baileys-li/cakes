export function setProduction(cb) {
	process.env.NODE_ENV = "production";
	cb();
}
export function setDevelopment(cb) {
	process.env.NODE_ENV = "development";
	cb();
}
