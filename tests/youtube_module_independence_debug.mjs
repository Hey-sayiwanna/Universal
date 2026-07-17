import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const modulePaths = [
	"YouTube.Bilingual.sgmodule",
	"YouTube.Bilingual.youtube-fix-v14.sgmodule",
];
const bundlePaths = [
	"request.youtube-standalone-v14.bundle.js",
	"response.youtube-standalone-v14.bundle.js",
	"Translate.response.youtube-fix-v14.bundle.js",
];

for (const path of modulePaths) {
	const source = await readFile(path, "utf8");
	assert.doesNotMatch(source, /github\.com\/DualSubs|raw\.githubusercontent\.com\/DualSubs/);
	assert.doesNotMatch(source, /Composite\.response/);
	assert.match(source, /request\.youtube-standalone-v14\.bundle\.js/);
	assert.match(source, /response\.youtube-standalone-v14\.bundle\.js/);
	assert.match(source, /Translate\.response\.youtube-fix-v14\.bundle\.js/);
}

for (const path of bundlePaths) {
	const source = await readFile(path, "utf8");
	assert.doesNotMatch(source, /@DualSubs|"DualSubs"/);
	assert.doesNotMatch(source, /github\.com\/DualSubs|raw\.githubusercontent\.com\/DualSubs/);
}

console.log("PASS: YouTube v14 module and runtime bundles are independent of DualSubs paths and BoxJs storage");
