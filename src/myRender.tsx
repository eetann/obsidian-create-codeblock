import "./app.css";
import { createRoot } from "react-dom/client";

export function myRender(containerEl: Element, source: string) {
	const root = createRoot(containerEl);
	root.render(<p>Hello, {source}!!!</p>);
}
