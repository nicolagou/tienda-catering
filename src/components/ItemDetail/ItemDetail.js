
import { useState, useContext } from "react"
// import { Link } from "react-router-dom";
import { cartContext } from "../../context/CartProvider";
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ producto }) => {
  const [contador, setContador] = useState(1);
  const { addToCart } = useContext(cartContext);


  return (
    <div className="card">
      <img alt={producto.title} src={`/images/${producto.imageId}`} />
      <h2>Nombre: {producto.title}</h2>
      <h2>Descripcion: {producto.description}</h2>
      <h2>Precio: {producto.price}</h2>
      <h2>Stock: {producto.stock}</h2>
      <h2>{contador}</h2>
      <ItemCount setContador={setContador} />
      {/* <Link to="/cart"> */}
      <button onClick={() => addToCart(producto, contador)}>Agregar al carrito</button>
      {/* </Link> */}
   
    </div>
  );
};

export default ItemDetail