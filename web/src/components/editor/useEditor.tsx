import { useCallback, useEffect, useRef } from "preact/hooks";
import { UseEditorConfig, GetSelection, Inject, Clear } from "./types";

import "./editor.scss";
import BlockFixer from "./plugins/blockFixer";

const useEditor = ({ ID, content, plugins }: UseEditorConfig) => {
	const EditorElement = useRef<HTMLSpanElement>(null);

	const getSelection: GetSelection = useCallback(() => {
		const selection = window?.getSelection()?.getRangeAt(0);

		// @ts-ignore
		if (!window.getSelection()?.anchorNode?.parentNode.classList.contains("__")) return { selection: undefined, text: undefined };

		const text = selection?.extractContents();

		return { selection, text };
	}, []);

	const inject: Inject = useCallback((classList = "", tag = "span", content) => {
		const { selection, text } = getSelection();

		if (!text) return;

		console.log({ selection, text });
		const node = document.createElement(tag);
		node.classList.add("__", classList);
		if (content) node.innerHTML = content;

		// @ts-ignore
		node?.appendChild(text);
		selection?.insertNode(node);
	}, []);

	const clear: Clear = useCallback(() => {
		const selection = window?.getSelection()?.getRangeAt(0);

		// @ts-ignore
		if (!window.getSelection()?.anchorNode?.parentNode.classList.contains("__")) return;

		const text = selection?.cloneRange().toString();
		selection?.deleteContents();

		const node = document.createTextNode(text || "");
		selection?.insertNode(node);
	}, []);

	useEffect(() => {
		plugins.push(BlockFixer);

		plugins.forEach(({ type, handler }) => {
			EditorElement.current?.addEventListener(type, (e) => {
				// @ts-ignore
				handler(e, { getSelection, inject, clear });
			});
		});

		return () => {
			plugins.forEach(({ type, handler }) => {
				EditorElement.current?.removeEventListener(type, (e) => {
					// @ts-ignore
					handler(e, { getSelection, inject, clear });
				});
			});
		};
	}, []);

	return {
		getSelection,
		inject,
		clear,
		EditorElement: () => (
			<span class="__editor__ __" id={ID} contentEditable={true} dangerouslySetInnerHTML={{ __html: content }} ref={EditorElement}></span>
		),
	};
};

export default useEditor;
