import { useEffect, useState } from "react";
import swal from "sweetalert";
import axios from "axios"

const useListaCompras = () => {
  const [lista, setLista] = useState([]);
  const [conLista, setConLista] = useState(() => {
    const storeLista = window.localStorage.getItem("lista");
    return storeLista ? setLista(JSON.parse(storeLista)) : null;
  });
  useEffect(() => {
    axios("../../public/listaCompras.json")
      .then((response) => response.json())
      .then((datos2) => {
        return lista.length > 0 ? null : setLista(datos2);
      })
      .catch(error => console.error({error}))

  }, [lista]);

  const addProducto = ({ nuevoProducto }) => {
    if (nuevoProducto){
      const itemNuevo = [
        ...lista,
        { id: lista.length + 1, nombre: nuevoProducto, estado: true },
      ];
      setLista(itemNuevo);
      window.localStorage.setItem("lista", JSON.stringify(itemNuevo));
      // swal({
      //   title: "Buen trabajo!",
      //   text: `El producto ${nuevoProducto} se Agrego con exito!`,
      //   icon: "success",
      //   // timer: 1000,
      // });
  
    }else{
      swal({
        title: "Error al ingresar el porducto!",
        text: `Debe ingresar el nombre del producto!`,
        icon: "error",
        // timer: 1000,
      });

    }
  };

  const reset = () => {
    swal({
      title: "Está seguro?",
      text: "No podrá recuperar estos productos!",
      icon: "warning",
      buttons: ["No", "Si"],
    }).then((respuesta) => {
      if (respuesta) {
        swal({ 
          text: "Los productos se borraron con exito", 
          icon: "success" ,
          timer: 1000,
        });
        const listaReset = [];
        setLista(listaReset);
        window.localStorage.setItem("lista", JSON.stringify(listaReset));
      }  
    });
  };

  const liMarcada = (itemObtenido) => {
    const itemTachado = lista.map((item) => {
      if (item.id === itemObtenido) {
        item.estado = !item.estado;
      }
      return item;
    });
    setLista(itemTachado);
    window.localStorage.setItem("lista", JSON.stringify(itemTachado));
  };

  const btnBorrar = (id) => {
    const listaBorrarItem = lista.filter((c) => c.id !== id);
    setLista(listaBorrarItem);
    window.localStorage.setItem("lista", JSON.stringify(listaBorrarItem));
  };

  return { lista, addProducto, reset, liMarcada, btnBorrar };
};
export default useListaCompras;
