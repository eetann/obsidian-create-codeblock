import "./app.css";
import { MarkdownRenderChild } from "obsidian";
import { type Root, createRoot } from "react-dom/client";

// ref: https://github.com/waynevanson/data-entry-obsidian-plugin
export class App extends MarkdownRenderChild {
	root: Root;
	source: string;

	constructor(containerEl: HTMLElement, source: string) {
		super(containerEl);
		this.root = createRoot(containerEl);
		this.source = source;
	}

	async onload() {
		this.root.render(<div>Hello, {this.source}(Component)!!!</div>);
	}

	async onunload() {
		this.root.unmount();
	}
}
