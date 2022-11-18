import { useEffect, useState } from 'react';
import { data } from "../../data/data";
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();


  const getProduct = new Promise((resolve, reject) => {
    setTimeout(() => {
      const filteredProduct = data.filter((producto) => {
        return producto.id == id;
      });
      resolve(filteredProduct)
    }, 1000);
  });

  useEffect(() => {
    getProduct
    .then((respuesta) => setProduct(respuesta))
    .catch(error => console.log(error))
      ;
  }, [id]);

  return (
    <div className='message-greeting-container'>
      {product && <ItemDetail producto={product} />}
    </div>
  );
}

export default ItemDetailContainer