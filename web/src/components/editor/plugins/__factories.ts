import { HandleInput, Plugin, HandleKeyDown } from "../types";

export const inputPlugin = (handler: HandleInput): Plugin => ({
	type: "input",
	handler,
});
export const keyDownPlugin = (handler: HandleKeyDown): Plugin => ({
	type: "keydown",
	handler,
});
