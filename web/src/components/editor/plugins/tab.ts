import { keyDownPlugin } from "./__factories";

const Tab = keyDownPlugin((e, { inject, getSelection }) => {
	if (e.code === "Tab") {
		e.preventDefault();
		inject("t", "span", "&nbsp &nbsp &nbsp &nbsp");
		// const { selection } = getSelection();
		// console.log(selection);
	}
});

export default Tab;
