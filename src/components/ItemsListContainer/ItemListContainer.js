import React from 'react'
import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = (props) => {
  return (
    <div className='message-greeting-container'> 
        <h2 className='message'>{props.name}</h2>
        <ItemCount/>
    </div>    
  )
}

export default ItemListContainer