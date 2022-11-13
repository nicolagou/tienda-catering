import { useState } from "react"
import './ItemCount.css'

const ItemCount = () => {
    const [contador, setContador] = useState(0);

    const add = () => {
        if (contador >= 10) {
            return;
        }
        setContador(contador + 1)
    }

    const subtract = () => {
        if (contador === 0) {
            return;
        }
        setContador(contador - 1)
    }

    return (
        <div>
            <div className="contador">
                <button onClick={add}>+</button>
                <h1>{contador}</h1>
                <button onClick={subtract}>-</button>
            </div>

        </div>
    )
}

export default ItemCount