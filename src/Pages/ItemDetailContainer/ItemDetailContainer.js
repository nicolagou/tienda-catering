import { useEffect, useState } from 'react';
import { data } from "../../data/data";
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState();
  
    const getProduct = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(data)
    }, 2000);    
    }); 
  
    useEffect(() => {
        getProduct.then((respuesta)=>{
            setProduct(respuesta[0]);
        });
        // eslint-disable-next-line
    }, []);
  
    return (
      <div className='message-greeting-container'> 
        {product && <ItemDetail producto={product}/>}
      </div>    
    );
  }

export default ItemDetailContainer