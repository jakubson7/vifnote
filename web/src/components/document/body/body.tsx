import { FunctionComponent } from "preact";
import Logger from "../../editor/plugins/logger";
import useEditor from "../../editor/useEditor";

import "./body.scss";

const Body: FunctionComponent = () => {
	const { EditorElement, inject, clear } = useEditor({
		ID: "body",
		content: "",
		plugins: [Logger("body")],
	});

	const handleFormatBold = () => inject("b");
	const handleFormatCursive = () => inject("c");
	const handleFormatClear = () => clear();

	return (
		<section class="body-editor">
			<EditorElement />
			<div>
				<button onClick={handleFormatBold}>bold</button>
				<button onClick={handleFormatCursive}>cursive</button>
				<button onClick={handleFormatClear}>clear</button>
			</div>
		</section>
	);
};

export default Body;
