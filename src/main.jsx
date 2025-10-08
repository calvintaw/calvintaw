import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import "./stars.css";
import "./clock.css";
import App from "./App.jsx";

//@ts-ignore
createRoot(document.getElementById("root")).render(
	<StrictMode>
		<App />
	</StrictMode>
);
