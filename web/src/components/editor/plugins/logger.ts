import { keyDownPlugin } from "./__factories";

const Logger = (msg: string) =>
	keyDownPlugin((e) => {
		console.log({ msg, editor: e.target });
	});

export default Logger;
