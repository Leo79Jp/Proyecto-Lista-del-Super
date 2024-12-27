import { useContext } from "react";
import { ListaContext } from "../context/ListaContext";

export default function ListaCompras() {
  const { lista, liMarcada, btnBorrar } = useContext(ListaContext);

  const marcada = (item) => {
    liMarcada(item)
  } 

  return (
    // <details open >
    //     <summary>Lista de Compras!</summary>

    <>
      <div className="div-compras" >
        <h2>Lista de Compras</h2>
        <ul className="ul-compras">
          {lista.map((list) => (
          <div className="div-li-button" key={list.id}>
            <li 
            className={list.estado === true ? 'li-compras' : 'li-compras tachada'}
            key={list.id} 
            onClick={()=> marcada(list.id)}
            >{list.nombre} </li>
            <button 
            className="btn-x"
            onClick={()=>btnBorrar(list.id)}
            >x</button>
          </div>
          ))}
        </ul>
      </div>
    </>
    // </details>
  );
}
