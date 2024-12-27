import { useContext } from "react";
import NavBar from "./components/NavBar";
import { UsuarioContext } from "./context/UsuarioContext";
import IngresoArt from "./components/IngresoArt";
import ListaCompras from "./components/ListaCompras";
import ListaTachada from "./components/ListaTachada";

function App() {
  const { usuario } = useContext(UsuarioContext);

  return (
    <>
      <NavBar />
      {usuario ? (
        <>
          <h1>Lista del Super</h1>
          <IngresoArt />
          <ListaCompras />
          <ListaTachada />
        </>
      ) : (
        <></>
      )}
    </>

  );
}

export default App;
