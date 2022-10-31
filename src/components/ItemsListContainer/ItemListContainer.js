import React from 'react'
import './ItemListContainer.css';

const ItemListContainer = (props) => {
  return (
    <div className='message-greeting-container'> 
        <h2 className='message'>{props.name}</h2>
    </div>    
  )
}

export default ItemListContainer