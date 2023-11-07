import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {

    const [count, setCount] = useState(initial);
const handleIncrement = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };
const handleDecrement = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    };
 const handleAddToCart = () => {
        if (count > 0) {
            onAdd(count);
        }
    };
return (
        <div>
        <div>
            <button className="button3" onClick={handleDecrement} disabled={count <= initial}>-</button>
            <span>{count}</span>
            <button className="button3" onClick={handleIncrement} disabled={count >= stock}>+</button>
            <button className="button4" onClick={handleAddToCart} disabled={count === 0}>Agregar al carrito</button>
        </div>
        </div>
    );
}

export default ItemCount;