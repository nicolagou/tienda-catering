import './ItemCount.css'

const ItemCount = ({setContador}) => {

    const addItem = () => {
        setContador((currentValue)=>currentValue + 1)
    }

    const removeItem = () => {
        setContador((currentValue)=>{
            if (currentValue > 1){
                return currentValue - 1;
            }else{
                return currentValue;
            }
            
        });
    };

    return (
        <div>
            <div className="contador">
                <button onClick={addItem}>+</button>
                <button onClick={removeItem}>-</button>
            </div>

        </div>
    )
}

export default ItemCount;