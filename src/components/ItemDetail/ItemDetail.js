
import { useState, useContext } from "react"
// import { Link } from "react-router-dom";
import { cartContext } from "../../context/CartProvider";
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({producto}) => {
  const [contador, setContador] = useState(0);
  const {cart, addToCart, clear} = useContext(cartContext);
  console.log(cart);

  return (
    <div className="card">
      <h1>Esto es la cantidad de productos en tu carrito {cart.length}</h1>
      <img alt={producto.title} src={`/images/${producto.imageId}`}/>
      <h2>Nombre: {producto.title}</h2>
      <h2>Descripcion: {producto.description}</h2>
      <h2>Stock: {producto.stock}</h2>
      <h2>{contador}</h2>
      <ItemCount setContador={setContador}/>
      {/* <Link to="/cart"> */}
      <button onClick={() => addToCart(producto,contador)}>Agregar al carrito</button>
      {/* </Link> */}
      <button onClick={() => clear()}>Vaciar Carrito</button>
      
    </div>
  );
};

export default ItemDetail