import { Plugin } from "obsidian";
import { App } from "./App";

export default class EmbedCalendar extends Plugin {
	private _language = "sample";

	async onload() {
		this.registerMarkdownCodeBlockProcessor(
			this._language,
			async (source, element, context) => {
				const container = element.createEl("div");
				const renderer = new App(this, container, source);
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
