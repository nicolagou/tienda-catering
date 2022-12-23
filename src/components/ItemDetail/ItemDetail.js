
import { useState, useContext } from "react"
import { cartContext } from "../../context/CartProvider";
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ producto }) => {
  const [contador, setContador] = useState(1);
  const { addToCart } = useContext(cartContext);


  return (
    <div className="card">
      <div className='ladoArriba'>
        <img alt={producto.title} src={`/images/${producto.imageId}`} />
      </div>
      <div className='ladoAbajo'>
      <p>Nombre: {producto.title}</p>
      <p>Descripcion: {producto.description}</p>
      <p>Precio: {producto.price}</p>
      <p>Stock: {producto.stock}</p>
      <p>{contador}</p>
      <ItemCount setContador={setContador} />
      <button onClick={() => addToCart(producto, contador)}>Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ItemDetail