
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({producto}) => {
  return (
    <div className="card">
      <img src={producto.imagen}/>
      <h2>Nombre: {producto.nombre}</h2>
      <h2>Comensales: {producto.comensales}</h2>
      <h2>Descripcion: {producto.descripcion}</h2>
      <ItemCount />
    </div>
  );
};

export default ItemDetail