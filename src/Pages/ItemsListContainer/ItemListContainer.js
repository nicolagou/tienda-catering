import { useEffect, useState } from 'react';
import { data } from '../../data/data';
import ItemList from '../../components/ItemList/ItemList';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css';

const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);
  const {categoryName} = useParams();
 

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
    if (categoryName) {
      const filteredData = data.filter((item)=>{
        return item.categoria === categoryName;
      });
      console.log(filteredData);
      resolve(filteredData);
    } else {
      resolve(data);
    }
  }, 2000);    
  }); 

  useEffect(() => {
      getProducts
      .then((respuesta)=>setProductList(respuesta))
      .catch(error => console.log(error))
      ;
  }, [categoryName]);

  return (
    <div className='message-greeting-container'> 
        {/* <h2 className='message'>{props.name}</h2> */}
        <ItemList productList={productList}/>
        
    </div>    
  )
}

export default ItemListContainer