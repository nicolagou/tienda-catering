
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({producto}) => {
    return (
      <div className="card">
        
          <h2>Nombre: {producto.nombre}</h2>
          <h2>Tipo: {producto.tipo}</h2>
          <h2>Especificacion: {producto.especificacion}</h2>
          <h2>Comensales: {producto.comensales}</h2>
          <ItemCount/>
        
      </div>
    )
  }

export default ItemDetail