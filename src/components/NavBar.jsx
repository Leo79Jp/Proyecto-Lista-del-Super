import React, { useState } from "react";
import { useContext } from "react";
import { UsuarioContext } from "../context/UsuarioContext";
import { ListaContext } from "../context/ListaContext";

export default function NavBar() {
  const { usuario, login, logout } = useContext(UsuarioContext);
  const {  reset } = useContext(ListaContext);

  const [inputUsuario, setInputUsuario] = useState('')
  const [inputPassword, setInputPassword] = useState('')

  const handleChangeUsuario = (event) => {
    setInputUsuario(event.target.value);
  };

  const handleChangePassword = (event) => {
    setInputPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault()
    login(inputUsuario, inputPassword)
  }
  const handleLogout = () => {
    logout()
    setInputUsuario('')
    setInputPassword('') 
    reset()
  }

  return (
    <form className="form-navBar" action="">
      {!usuario ? (
        <>
          <input 
          className="input-navBar" 
          type="text" 
          placeholder="Usuario" 
          required
          value={inputUsuario}
          onChange={handleChangeUsuario}
    />
          <input 
          className="input-navBar" 
          type="password" 
          placeholder="Contraseña" 
          required
          value={inputPassword}
          onChange={handleChangePassword}
    />
          <button 
          className="btn-navBar"
          type="submit" 
          onClick={handleLogin}
          >Ingresar</button>
        </>
        ) : (  
        <>
          <span> Bienvenido👋 {usuario.nombre}</span>
          <button 
          className="btn-navBar"
          onClick={handleLogout}
          >Cerrar Seción</button>
        </>
        )}  
    </form>
  );
}
