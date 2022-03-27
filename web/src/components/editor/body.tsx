import { FunctionComponent } from "preact";
import useEditBlock from "../../hooks/useEditBlock";

import "./edit-block.scss";

const BodyEditor: FunctionComponent = () => {
	const { EditBlock, injectBlock } = useEditBlock("asdasdasd");

	const handleFormatBold = () => injectBlock("bold");

	return (
		<section class="body-editor">
			<EditBlock />
			<div>
				<button onClick={handleFormatBold}></button>
			</div>
		</section>
	);
};

export default BodyEditor;
