import { createContext, useState } from "react";

export const cartContext = createContext([]);


const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const isInCart = (id) => {
        return cart.some((product)=>product.id === id);
    };
    const addToCart = (item, quantity) => {
        if (isInCart(item.id)){
            alert("El producto ya se encuentra en el carrito")
        } else{
        setCart([...cart, { ...item, quantity }]);
        }
    };

    // const removeItem = (itemId) => {    }; 

    const clear = ()=>{
        setCart([]);
    };

    return (
        <cartContext.Provider value={{ cart, addToCart, clear }}>
            {children}
        </cartContext.Provider>
    )
};

export default CartProvider;