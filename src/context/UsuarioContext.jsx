import useNavBar from "../hooks/useNavBar";
import { createContext } from "react";

export const UsuarioContext = createContext();


export const UsuarioProvider = ({ children }) => {
    const { usuario, login, logout } = useNavBar();

  return (
    <UsuarioContext.Provider value={{ usuario, login, logout }}>
      {children}
      </UsuarioContext.Provider>
  );
};
