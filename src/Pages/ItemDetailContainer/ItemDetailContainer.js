import { useEffect, useState } from 'react';
import { data } from "../../data/data";
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
  const { id } = useParams();


  const getProduct = () => {
    const filteredProduct = data.filter((producto) => {
      return producto.id == id;
    });
    setProduct(...filteredProduct);
  };


  console.log(product);

  useEffect(() => {
    getProduct();
  }, [id]);



  return (
    <div className='message-greeting-container'>
      {product && <ItemDetail producto={product} />}
    </div>
  );
}

export default ItemDetailContainer