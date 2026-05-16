import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { MusicContextProvider } from "./context/SongContext.jsx";

createRoot(document.getElementById("root")).render(
  <MusicContextProvider>
    <App />
  </MusicContextProvider>
);
