import "./app.css";
import { MarkdownRenderChild, type Plugin } from "obsidian";
import { type Root, createRoot } from "react-dom/client";

// ref: https://github.com/waynevanson/data-entry-obsidian-plugin
export class App extends MarkdownRenderChild {
	plugin: Plugin;
	root: Root;
	source: string;

	constructor(plugin: Plugin, containerEl: HTMLElement, source: string) {
		super(containerEl);
		this.plugin = plugin;
		this.root = createRoot(containerEl);
		this.source = source;
	}

	async onload() {
		this.root.render(<div>Hello, Component! ここでsource使ったりする。</div>);
	}

	async unload() {
		this.root.unmount();
	}
}
