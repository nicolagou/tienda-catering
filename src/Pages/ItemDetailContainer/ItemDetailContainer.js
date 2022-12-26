import { useEffect, useState } from 'react';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import {doc, getDoc, getFirestore} from 'firebase/firestore';
import Loading from '../../components/Loading/Loading';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  const cambiarEstado =()=>{
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }


  const getProduct = () => {
    const db = getFirestore();
    const query = doc(db, "items", id)
    getDoc(query)
    .then(response=>{
      setProduct({id: response.id, ...response.data()});
    })
    .catch(error=>console.log(error))
    };


  useEffect(() => {
    getProduct();
    cambiarEstado();
         // eslint-disable-next-line
  }, [id]);



  return (
    <div>
      {loading ?(
        <Loading/>
      ):(
    <div className='message-greeting-container'>
      {product && <ItemDetail producto={product} />}
    </div>
      )}
    </div>
  );
}

export default ItemDetailContainer