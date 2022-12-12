import { createContext, useState } from "react";

export const cartContext = createContext([]);


const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addToCart = (item, quantity) => {
        setCart([...cart, { ...item, quantity }]);
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