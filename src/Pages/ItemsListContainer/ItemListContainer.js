import { useEffect, useState } from 'react';
import ItemList from '../../components/ItemList/ItemList';
import { useParams } from 'react-router-dom';
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore';
import Loading from '../../components/Loading/Loading';
import './ItemListContainer.css';

const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);
  const {categoryName} = useParams();
  const [loading, setLoading] = useState(false);

  const cambiarEstado =()=>{
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  } 

  const getProducts = () => {
    const db = getFirestore();
    const queryBase = collection(db, "items");
    
    const querySnapShot = categoryName
    ? query(queryBase, where( "categoryId", "==", categoryName))
    : queryBase;
      getDocs(querySnapShot)
      .then((response)=>{
        const data = response.docs.map((item) =>{
          return {id: item.id, ...item.data()};
        });
        setProductList(data);
      })
      .catch((error)=>{console.log(error)})
    }; 

  useEffect(() => {
      getProducts();
      cambiarEstado();
      // eslint-disable-next-line
  }, [categoryName]);

  return (
    <div>
      {loading ?(
        <Loading/>
      ):(
    <div className='message-greeting-container'> 
        <ItemList productList={productList}/>
    </div>    
          )}
          </div>
  )
}

export default ItemListContainer