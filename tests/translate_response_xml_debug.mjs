import assert from "node:assert/strict";
import XML from "../src/XML/XML.mjs";

function combineText(originText, transText, ShowOnly = false, position = "Forward", lineBreak = "\n") {
	originText = originText ?? "";
	transText = transText ?? "";
	if (!transText.trim()) return originText;
	if (ShowOnly) return transText;
	return position === "Reverse" ? `${transText}${lineBreak}${originText}` : `${originText}${lineBreak}${transText}`;
}

async function synthesize(xml, platform, translator) {
	const body = XML.parse(xml);
	const paragraphNode = body?.timedtext?.body?.p ?? [];
	const paragraph = Array.isArray(paragraphNode) ? paragraphNode : paragraphNode ? [paragraphNode] : [];
	const fullText = paragraph.map(para => {
		if (para?.s) {
			para["#"] = Array.isArray(para.s) ? para.s.map(segment => segment["#"]).join(" ") : para.s["#"] ?? "";
			delete para.s;
		}
		return para?.["#"] ?? "";
	});

	let translation = await translator("Part", fullText);
	if (platform === "YouTube" && (!Array.isArray(translation) || translation.length !== fullText.length)) {
		translation = await translator("Row", fullText);
	}
	if (!Array.isArray(translation)) translation = [];
	translation = fullText.map((_, index) => {
		const text = translation[index] ?? "";
		return Array.isArray(text) ? text.flat(Number.POSITIVE_INFINITY).join("") : text;
	});

	paragraph.forEach((para, index) => {
		if (para["#"]) para["#"] = combineText(para["#"], translation[index]);
	});
	return XML.stringify(body);
}

const korean = `<?xml version="1.0" encoding="utf-8" ?><timedtext format="3"><body><p t="0"><s>안녕</s><s>하세요</s></p></body></timedtext>`;
const english = `<?xml version="1.0" encoding="utf-8" ?><timedtext format="3"><body><p t="0">Hello world</p></body></timedtext>`;
const mismatchXml = `<?xml version="1.0" encoding="utf-8" ?><timedtext format="3"><body><p t="0"><s>一</s></p><p t="1"><s>二</s></p><p t="2"><s>三</s></p></body></timedtext>`;

const koreanOutput = await synthesize(korean, "YouTube", async (_method, text) => text.map(() => "你好"));
assert.match(koreanOutput, /안녕.*하세요/);
assert.match(koreanOutput, /你好/);

const englishOutput = await synthesize(english, "YouTube", async (_method, text) => text.map(() => "你好，世界"));
assert.match(englishOutput, /Hello world/);
assert.match(englishOutput, /你好，世界/);

const calls = [];
const mismatchOutput = await synthesize(mismatchXml, "YouTube", async (method, text) => {
	calls.push(method);
	return method === "Part" ? ["只有一条"] : text.map(() => ["逐行翻译"]);
});
assert.deepEqual(calls, ["Part", "Row"]);
assert.match(mismatchOutput, /逐行翻译/);
assert.doesNotMatch(mismatchOutput, /undefined/);
assert.equal(combineText("原文", ""), "原文");

console.log(JSON.stringify({
	korean: "passed",
	english: "passed",
	mismatchFallback: "passed",
	emptyTranslation: "passed"
}, null, 2));
