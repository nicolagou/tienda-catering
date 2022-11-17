import React from 'react';
import logo from "../../assets/carritodecompras.png";
import './CartWidget.css';

const CartWidget = () => {
    return (
        <div className='menu-navbar__logo'>
            <img className='menu-navbar__img' src={logo} alt="cart widget"/>
    </div>
    )
}

export default CartWidget