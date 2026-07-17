import { MessageType } from "@protobuf-ts/runtime";

// Recovered from this repository's pre-submodule history (aea87fd^).
class BrowseResponse$Type extends MessageType {
	constructor() {
		super("BrowseResponse", [
			{ no: 9, name: "contents", kind: "message", T: () => Contents },
			{ no: 10, name: "continuationContents", kind: "message", T: () => Contents },
		]);
	}
}
export const BrowseResponse = new BrowseResponse$Type();

class Contents$Type extends MessageType {
	constructor() {
		super("Contents", [
			{ no: 49399797, name: "sectionListRenderer", kind: "message", T: () => SectionListRenderer },
			{ no: 50195462, name: "n4F50195462", kind: "message", T: () => n4F50195462 },
			{ no: 58173949, name: "singleColumnBrowseResultsRenderer", kind: "message", T: () => SingleColumnBrowseResultsRenderer },
			{ no: 90823135, name: "musicSideAlignedItemRenderer", kind: "message", T: () => MusicSideAlignedItemRenderer },
			{ no: 91303872, name: "gridRenderer", kind: "message", T: () => GridRenderer },
			{ no: 153515154, name: "n6F153515154", kind: "message", T: () => n6F153515154 },
			{ no: 221496734, name: "musicDescriptionShelfRenderer", kind: "message", T: () => MusicDescriptionShelfRenderer },
		]);
	}
}
const Contents = new Contents$Type();

class SingleColumnBrowseResultsRenderer$Type extends MessageType {
	constructor() {
		super("SingleColumnBrowseResultsRenderer", [
			{ no: 1, name: "tabs", kind: "message", repeat: 1, T: () => Tabs },
		]);
	}
}
const SingleColumnBrowseResultsRenderer = new SingleColumnBrowseResultsRenderer$Type();

class MusicSideAlignedItemRenderer$Type extends MessageType {
	constructor() {
		super("MusicSideAlignedItemRenderer", [
			{ no: 1, name: "startItems", kind: "message", repeat: 1, T: () => Contents },
		]);
	}
}
const MusicSideAlignedItemRenderer = new MusicSideAlignedItemRenderer$Type();

class GridRenderer$Type extends MessageType {
	constructor() {
		super("GridRenderer", [
			{ no: 1, name: "items", kind: "message", repeat: 1, T: () => Contents },
		]);
	}
}
const GridRenderer = new GridRenderer$Type();

class Tabs$Type extends MessageType {
	constructor() {
		super("Tabs", [
			{ no: 58174010, name: "tabRenderer", kind: "message", T: () => TabRenderer },
		]);
	}
}
const Tabs = new Tabs$Type();

class TabRenderer$Type extends MessageType {
	constructor() {
		super("TabRenderer", [
			{ no: 2, name: "title", kind: "scalar", opt: true, T: 9 },
			{ no: 3, name: "selected", kind: "scalar", T: 8 },
			{ no: 4, name: "content", kind: "message", T: () => Contents },
			{ no: 11, name: "tabIdentifier", kind: "scalar", opt: true, T: 9 },
		]);
	}
}
const TabRenderer = new TabRenderer$Type();

class SectionListRenderer$Type extends MessageType {
	constructor() {
		super("SectionListRenderer", [
			{ no: 1, name: "contents", kind: "message", repeat: 1, T: () => Contents },
			{ no: 6, name: "header", kind: "message", T: () => Contents },
		]);
	}
}
const SectionListRenderer = new SectionListRenderer$Type();

class n4F50195462$Type extends MessageType {
	constructor() {
		super("n4F50195462", [
			{ no: 1, name: "n5F1", kind: "message", repeat: 1, T: () => Contents },
		]);
	}
}
const n4F50195462 = new n4F50195462$Type();

class MusicDescriptionShelfRenderer$Type extends MessageType {
	constructor() {
		super("MusicDescriptionShelfRenderer", [
			{ no: 3, name: "description", kind: "message", T: () => Description },
			{ no: 10, name: "footer", kind: "message", T: () => Footer },
		]);
	}
}
const MusicDescriptionShelfRenderer = new MusicDescriptionShelfRenderer$Type();

class Description$Type extends MessageType {
	constructor() {
		super("Description", [
			{ no: 1, name: "runs", kind: "message", repeat: 1, T: () => Runs },
		]);
	}
}
const Description = new Description$Type();

class n6F153515154$Type extends MessageType {
	constructor() {
		super("n6F153515154", [
			{ no: 172660663, name: "n7F172660663", kind: "message", T: () => n7F172660663 },
		]);
	}
}
const n6F153515154 = new n6F153515154$Type();

class n7F172660663$Type extends MessageType {
	constructor() {
		super("n7F172660663", [
			{ no: 1, name: "n8F1", kind: "message", T: () => n8F1 },
		]);
	}
}
const n7F172660663 = new n7F172660663$Type();

class Footer$Type extends MessageType {
	constructor() {
		super("Footer", [
			{ no: 1, name: "runs", kind: "message", repeat: 1, T: () => Runs },
		]);
	}
}
const Footer = new Footer$Type();

class n8F1$Type extends MessageType {
	constructor() {
		super("n8F1", [
			{ no: 168777401, name: "n9F168777401", kind: "message", T: () => n9F168777401 },
		]);
	}
}
const n8F1 = new n8F1$Type();

class n9F168777401$Type extends MessageType {
	constructor() {
		super("n9F168777401", [
			{ no: 5, name: "n10F5", kind: "message", T: () => n10F5 },
		]);
	}
}
const n9F168777401 = new n9F168777401$Type();

class n10F5$Type extends MessageType {
	constructor() {
		super("n10F5", [
			{ no: 465160965, name: "n11F465160965", kind: "message", T: () => n11F465160965 },
		]);
	}
}
const n10F5 = new n10F5$Type();

class n11F465160965$Type extends MessageType {
	constructor() {
		super("n11F465160965", [
			{ no: 4, name: "n12F4", kind: "message", T: () => n12F4 },
		]);
	}
}
const n11F465160965 = new n11F465160965$Type();

class n12F4$Type extends MessageType {
	constructor() {
		super("n12F4", [
			{ no: 1, name: "n13F1", kind: "message", repeat: 1, T: () => n13F1 },
			{ no: 2, name: "originText", kind: "scalar", T: 9 },
		]);
	}
}
const n12F4 = new n12F4$Type();

class n13F1$Type extends MessageType {
	constructor() {
		super("n13F1", [
			{ no: 1, name: "f1", kind: "scalar", T: 9 },
		]);
	}
}
const n13F1 = new n13F1$Type();

class Runs$Type extends MessageType {
	constructor() {
		super("Runs", [
			{ no: 1, name: "text", kind: "scalar", T: 9 },
		]);
	}
}
const Runs = new Runs$Type();
