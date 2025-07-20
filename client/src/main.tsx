import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import Clarity from "@microsoft/clarity";

Clarity.init("shwjbrge5h");

createRoot(document.getElementById("root")!).render(<App />);
