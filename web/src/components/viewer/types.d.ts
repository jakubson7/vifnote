export interface Block {
	tag: string;
	classList: string;
	text: string;
}

export interface Paragraph {
	tag: "p" | string;
	classList: string;
	content: Block[];
}
export type Table = Paragraph[];
