import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./app/globals.css";

// EN: The entry point — you mount <App/> into #root BY HAND.
// EN: Before this JS runs, #root is empty: that is exactly what View Source shows.
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
