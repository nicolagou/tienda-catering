import './CartWidget.css';
import { useContext } from 'react';
import { cartContext } from '../../context/CartProvider';

const CartWidget = () => {
    const { cart } = useContext(cartContext)
    return (
        <div className='menu-navbar__logo'>
            <img className='menu-navbar__img' src={`/images/carritodecompras.png`} alt="cart widget" />
            <h3>{cart.length>0 && cart.length}</h3>
        </div>
    )
}

export default CartWidget