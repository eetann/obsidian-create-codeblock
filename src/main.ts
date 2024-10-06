import { Plugin } from "obsidian";
import { App } from "./App";
import { myRender } from "./myRender";

export default class CreateCodeblock extends Plugin {
	private _language = "sample";

	async onload() {
		this.registerMarkdownCodeBlockProcessor(
			this._language,
			async (source, element, context) => {
				// pattern 1
				// myRender(element, source);
				// pattern 2
				const renderer = new App(element, source);
				context.addChild(renderer);
			},
		);
		this.registerCodeBlockHighlithing();
		this.register(() => this.unregisterCodeBlockHighlithing());
	}

	registerCodeBlockHighlithing() {
		window.CodeMirror.defineMode(this._language, (config) =>
			window.CodeMirror.getMode(config, "javascript"),
		);
	}
	unregisterCodeBlockHighlithing() {
		window.CodeMirror.defineMode(this._language, (config) =>
			window.CodeMirror.getMode(config, "null"),
		);
	}
}
