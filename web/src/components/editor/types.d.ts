// Editor core
export type GetSelection = () => { selection: Range | undefined; text: DocumentFragment | undefined };
export type Inject = (classList: string, tag?: string, content?: string) => void;
export type Clear = () => void;

// Editor plugin API
export interface HandlerParams {
	getSelection: GetSelection;
	inject: Inject;
	clear: Clear;
}
export type HandleInput = (e: JSX.TargetedEvent<HTMLSpanElement>, params: HandlerParams) => void;
export type HandleKeyDown = (e: JSX.TargetedKeyboardEvent<HTMLSpanElement>, params: HandlerParams) => void;

export type PluginType = "input" | "keydown";
export interface Plugin {
	type: PluginType;
	handler: HandleInput | HandleKeyDown;
}

// Editor config object
export interface UseEditorConfig {
	ID: string;
	content: string;
	plugins: Plugin[];
}

// Editor elements
export type Element =
	| "b" // Bold
	| "c" // Cursive
	| "t" // Tab
	| string;
