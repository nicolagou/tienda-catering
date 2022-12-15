

import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ producto }) => {
  return (
    <Link to={`/item/${producto.id}`}>
      <div className="card">
        <img alt={producto.imagenId} src={`/images/${producto.imageId}`}/>
        <h2>Nombre: {producto.title}</h2>
        <h2>Descripcion: {producto.description}</h2>
        <h2>Precio: {producto.price}</h2>
        <h2>Stock: {producto.stock}</h2>

      </div>
    </Link>
  );
};

export default Item