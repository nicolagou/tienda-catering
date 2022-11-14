import { useEffect, useState } from 'react';
import { data } from '../../data/data';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);

  const getProducts = new Promise((resolve, reject) => {
  setTimeout(() => {
      resolve(data)
  }, 2000);    
  }); 

  useEffect(() => {
      getProducts.then((respuesta)=>{
        setProductList(respuesta);
      });
      // eslint-disable-next-line
  }, []);

  return (
    <div className='message-greeting-container'> 
        {/* <h2 className='message'>{props.name}</h2> */}
        <ItemList productList={productList}/>
        <ItemCount/>
    </div>    
  )
}

export default ItemListContainer