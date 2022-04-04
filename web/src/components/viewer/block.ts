import { Block } from "./types";

const block = (tag: "span" | "li" = "span", classList): Block => ({
	tag,
});

export default block;
