import { useEffect, useState } from "react";
const users = [
  {
    "id": 1,
    "nombre": "Leo",
    "password": "leopass",
    "rol": "admin"
  },
  {
    "id": 2,
    "nombre": "Miri",
    "password": "miripass",
    "rol": "admin"
  }

]

const useNavBar = () => {
  const [listaInicial, setListaInicial] = useState([]);
  const [usuarios, setUsuarios] = useState(users);
  const [usuario, setUsuario] = useState("");

  const [conUsuario, setConUsuario] = useState(() => {
    const storeUsuario = window.localStorage.getItem("user");
    return storeUsuario 
    ?  
      setUsuario(JSON.parse(storeUsuario))
    : null;
  }); 
  // useEffect(() => {
  //       // fetch("../../public/usuarios.json")
  //   fetch('https://66fb28368583ac93b40b0277.mockapi.io/usuarios')
  //   .then((response) => response.json())
  //   .then((datos) => {
  //     setUsuarios(datos);
  //   })
  //   .catch(error => console.error({error}))
  // }, []);

  useEffect(() => {
        // fetch("../../public/listaCompras.json")
    fetch('https://66fb28368583ac93b40b0277.mockapi.io/lista')
      .then((response) => response.json())
      .then((datos2) => {
        setListaInicial(datos2);
      })
      // .catch(error => console.error({error}))
  }, []);
  const login = (nombre, password) => {
    const resultado = usuarios.find(
      (c) => c.nombre === nombre && c.password === password
    );
    if (resultado) {
      setUsuario(nombre);
      window.localStorage.setItem("user", JSON.stringify(nombre));
      window.localStorage.setItem("lista", JSON.stringify(listaInicial));
    } else {
      alert("EL usuario o la Contraseña son incorrectas!");
    }
  };

  const logout = () => {
    setUsuario(null);
    window.localStorage.removeItem("user");
    window.localStorage.removeItem("lista");
    
  };

  return { usuario, login, logout };
};
export default useNavBar;
