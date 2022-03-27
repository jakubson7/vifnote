import { useRef } from "preact/hooks";

export type InjectBlock = (...classList: string[]) => void;
export type HandleInput = (e?: JSX.TargetedEvent<HTMLSpanElement, Event>, injectBlock?: InjectBlock) => void;

const useEditBlock = (startContent: string = "", handleInput: HandleInput = () => {}) => {
	const EditorArea = useRef<HTMLSpanElement>(null);

	const injectBlock: InjectBlock = (...classList) => {
		const selection = window?.getSelection()?.getRangeAt(0);

		// @ts-ignore
		if (!window.getSelection()?.anchorNode?.parentNode.classList.contains("__block__")) return;

		const selectedText = selection?.extractContents();
		const element = document.createElement("span");

		element.classList.add(...classList);

		// @ts-ignore
		element.appendChild(selectedText);
		selection?.insertNode(element);
	};

	return {
		injectBlock,
		EditBlock: () => (
			<span
				class="__editor__ __block__"
				contentEditable={true}
				ref={EditorArea}
				dangerouslySetInnerHTML={{ __html: startContent || "" }}
				onInput={(e) => handleInput(e, injectBlock)}
			></span>
		),
	};
};

export default useEditBlock;
