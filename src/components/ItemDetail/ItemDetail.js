
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({producto}) => {
  return (
    <div className="card">
      <h2>Nombre: {producto.nombre}</h2>
      <h2>Tipo: {producto.tipo}</h2>
      <h2>Categoria: {producto.categoria}</h2>
      <h2>Comensales: {producto.comensales}</h2>
      <h2>Descripcion: {producto.descripcion}</h2>
      <ItemCount />
    </div>
  );
};

export default ItemDetail