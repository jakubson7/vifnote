import { keyDownPlugin } from "./__factories";

const BlockFixer = keyDownPlugin((e) => {
	if (e.code === "Enter") {
		// @ts-ignore
		document.querySelectorAll(`.__editor__#${e.target.id} div`).forEach((div) => {
			div.classList.add("__");
		});
	}
});

export default BlockFixer;
