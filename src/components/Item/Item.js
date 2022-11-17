

import './Item.css';

const Item = ({producto}) => {
  return (
    <div className="card">
        <h2>Nombre: {producto.nombre}</h2>
        <h2>Tipo: {producto.tipo}</h2>
        <h2>Especificacion: {producto.especificacion}</h2>
        <h2>Comensales: {producto.comensales}</h2>
        
    </div>
  )
}

export default Item