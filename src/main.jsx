import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/style.css";
import App from "./App.jsx";
import { UsuarioProvider } from "./context/UsuarioContext.jsx";
import { ListaProvider } from "./context/ListaContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UsuarioProvider>
      <ListaProvider>
        <App />
      </ListaProvider>
    </UsuarioProvider>
  </StrictMode>
);
