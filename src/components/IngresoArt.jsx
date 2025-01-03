import { useContext, useState } from "react"
import { ListaContext } from "../context/ListaContext";

export default function IngresoArt() {
  const { addProducto, reset } = useContext(ListaContext);
  
  const [nuevoProducto, setNuevoProducto] = useState('')

  const handleChange = (event) => {
    setNuevoProducto(event.target.value)
  }
  const agregarProducto = (event) => {
    event.preventDefault()
    setNuevoProducto('')
    addProducto({nuevoProducto})
  }
  const limpiarProducto = (event) => {
    event.preventDefault()
    setNuevoProducto('')
    reset([])
  }

  return (
    <form>
      <div className="form-ingresar">
        <input
          className="input-ingreso"
          type="text"
          placeholder="Ingresar Articulo"
          value={nuevoProducto}
          onChange={handleChange}
        />
        <button 
        className="btn-ingreso"
        onClick={agregarProducto}
        >Ingresar</button>

        <button 
        className="btn-ingreso"
        onClick={limpiarProducto}
        >Limpiar</button>
      </div>
    </form>
  );
}
