import { useContext, useState, useEffect } from "react";
import { cartContext } from '../../context/CartProvider';
import { collection, addDoc, getFirestore, doc, updateDoc } from "firebase/firestore";
import moment from "moment";


const Cart = () => {
    const { cart } = useContext(cartContext);
    const [total, setTotal] = useState(0);
    const [formValues, setFormValues] = useState({
        name:"",
        phone:"",
        email:"",
    });

    const getTotalPrice = () => {
        setTotal(cart.reduce((acc, product) => acc + product.price * product.quantity, 0))
    };

    const createOrder = () => {
        const db = getFirestore();
        const query = collection(db, "order");
        const newOrder = {
            buyer: {
                name: formValues.name,
                phone: formValues.phone,
                email: formValues.email,
            },
            date: moment().format("DD/MM/YYYY"),
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

    const handleInputChange = (event) =>{
        setFormValues({
            ...formValues,
            [event.target.name]:event.target.value,
        })
    };

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
                <div>
                    <h2>Formulario</h2>
                    <input name="name" type="text" placeholder="Nombre" value={formValues.name} onChange={handleInputChange}/>
                    <input name="phone" type="text" placeholder="Telefono" value={formValues.phone} onChange={handleInputChange}/>
                    <input name="email" type="text" placeholder="Email" value={formValues.email} onChange={handleInputChange}/>
                </div>
            </div>
        </div>
    )
}

export default Cart