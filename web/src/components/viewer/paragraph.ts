import { Block, Paragraph } from "./types";

const paragraph = (tag: "p" | "ul" = "p", classList: string = "", content: Block[] = []): Paragraph => ({
	tag,
	classList: classList + "__",
	content,
});

export default paragraph;
