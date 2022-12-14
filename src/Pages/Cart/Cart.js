import { useContext } from "react";
import { cartContext } from '../../context/CartProvider';


const Cart = () => {
    const {cart} = useContext(cartContext);
    console.log(cart);
  return (
    <div>Cart</div>
  )
}

export default Cart