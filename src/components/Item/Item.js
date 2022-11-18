

import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({producto}) => {
  return (
    <Link to={`/item/${producto.id}`}>
    <div className="card">
        <h2>Nombre: {producto.nombre}</h2>
        <h2>Tipo: {producto.tipo}</h2>
        <h2>Categoria: {producto.categoria}</h2>
        <h2>Comensales: {producto.comensales}</h2>
        
    </div>
    </Link>
  );
};

export default Item