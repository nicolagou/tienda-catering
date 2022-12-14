import { useContext, useState, useEffect } from "react";
import { cartContext } from '../../context/CartProvider';


const Cart = () => {
    const { cart } = useContext(cartContext);
    const [total, setTotal] = useState(0);
    const getTotalPrice = () => {
        setTotal(cart.reduce((acc, product) => acc + product.price * product.quantity, 0))
    };

    useEffect(() => {
        getTotalPrice();
               // eslint-disable-next-line
    }, [cart])

    return (
        <div className='message-greeting-container'>
            {cart.map((product) => (
                <div className="card" kew={product.id}>
                    <img alt={product.title} src={`/images/${product.imageId}`} />
                    <h2>Nombre: {product.title}</h2>
                    <h2>Descripcion: {product.description}</h2>
                </div>
            ))}
            <div>
                <h1>Total: {total}</h1>
            </div>
        </div>
    )
}

export default Cart