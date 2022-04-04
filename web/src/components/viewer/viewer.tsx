import { FunctionalComponent, createElement } from "preact";
import { Table } from "./types";

import "./viewer.scss";

export interface ViewerProps {
	ID: string;
	classList?: string;
	edtitable?: boolean;
	content?: Table;
}

const Viewer: FunctionalComponent<ViewerProps> = ({ ID, classList, edtitable, content }) => {
	return (
		<span id={ID} class={"__viewer__ __ " + (classList || "")} contentEditable={edtitable || false}>
			{content?.map(({ tag, classList, content }, id) =>
				createElement(
					tag,
					{ key: id, class: classList },
					content.map(({ tag, classList, text }, id) => createElement(tag, { key: id, class: classList }, text))
				)
			)}
		</span>
	);
};

export default Viewer;
