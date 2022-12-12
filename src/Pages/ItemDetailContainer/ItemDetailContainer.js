import { useEffect, useState } from 'react';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import {doc, getDoc, getFirestore} from 'firebase/firestore';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
  const { id } = useParams();


  const getProduct = () => {
    const db = getFirestore();
    const query = doc(db, "items", id)
    getDoc(query)
    .then(response=>{
      setProduct({id: response.id, ...response.data()});
    })
    .catch(error=>console.log(error))
    };


  console.log(product);

  useEffect(() => {
    getProduct();
         // eslint-disable-next-line
  }, [id]);



  return (
    <div className='message-greeting-container'>
      {product && <ItemDetail producto={product} />}
    </div>
  );
}

export default ItemDetailContainer