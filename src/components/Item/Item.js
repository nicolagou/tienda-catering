

import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ producto }) => {
  return (

    <div className="card">
      <div className='ladoArriba'>
        <img alt={producto.title} src={`/images/${producto.imageId}`} />
      </div>
      <div className='ladoAbajo'>
        <div>
        <h2>{producto.title}</h2>
        </div>
        <p>Descripcion: {producto.description}</p>
        <p>Precio: ${producto.price}</p>
        <p>Stock: {producto.stock}</p>
        <Link to={`/item/${producto.id}`}>
          <button>Ver Detalle</button>
        </Link>
      </div>
    </div>

  );
};

export default Item