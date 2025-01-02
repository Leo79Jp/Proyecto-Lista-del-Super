import { createContext } from "react";
import useListaCompras from "../hooks/useListaCompras";

export const ListaContext = createContext();


export const ListaProvider = ({ children }) => {
    const { lista, addProducto, reset, liMarcada, btnBorrar, resetLogout } = useListaCompras();

  return (
    <ListaContext.Provider value={{ lista, addProducto, reset, liMarcada, btnBorrar, resetLogout }}>
      {children}
      </ListaContext.Provider>
  );
};
