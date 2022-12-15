import { useContext, useState, useEffect } from "react";
import { cartContext } from '../../context/CartProvider';
import { collection, addDoc, getFirestore, doc, updateDoc } from "firebase/firestore";


const Cart = () => {
    const { cart } = useContext(cartContext);
    const [total, setTotal] = useState(0);

    const getTotalPrice = () => {
        setTotal(cart.reduce((acc, product) => acc + product.price * product.quantity, 0))
    };

    const createOrder = () => {
        const db = getFirestore();
        const query = collection(db, "order");
        const newOrder = {
            buyer: {
                name: "nico",
                phone: "1513135",
                email: "test@test.com"
            },
            items: cart,
            total: total,
        };
        addDoc(query, newOrder)
            .then((response) => {
                alert(`Orden creada con el id: ${response.id}`)
                return(response)
            })
            .then((res) => {
                cart.forEach((product) => {
                    const query = doc (db, "items",product.id);
                    updateDoc(query, {
                        stock: product.stock - product.quantity,
                    })
                });
            })
            .catch((error) => console.log(error));

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
                <button onClick={createOrder}>Crear Orden</button>
            </div>
        </div>
    )
}

export default Cart