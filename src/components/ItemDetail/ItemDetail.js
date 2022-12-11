
import { useState } from "react"
import { Link } from "react-router-dom";
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({producto}) => {
  const [contador, setContador] = useState(0);
  return (
    <div className="card">
      <img alt={producto.nombre} src={producto.imagen}/>
      <h2>Nombre: {producto.nombre}</h2>
      <h2>Comensales: {producto.comensales}</h2>
      <h2>Descripcion: {producto.descripcion}</h2>
      <h2>{contador}</h2>
      <ItemCount setContador={setContador}/>
      <Link to="/cart">
      <button>Terminar mi compra</button>
      </Link>
      
    </div>
  );
};

export default ItemDetail