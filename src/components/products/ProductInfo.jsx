import { Modal, Typography } from "@mui/material";
import ItemCount from "../common/ItemCount";
import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
const ProductInfo = ({ product, open, setOpen }) => {
    const { id, image, title, price, stock } = product
    const { addToCart } = useCartContext()
    const [quantityInCart, setQuantityInCart] = useState(0);


    const handleClose = () => {
        setOpen(prev => !prev)
    }

    const CloseModal = () => {
        setOpen(false)
    }

    const handleAddToCart = (count) => {
setQuantityInCart(count);
        if (count > 0) {
            addToCart({
                id, title, image, price, quantity: count
            })
        }
        CloseModal()
    };


    return (<>
        <Modal open={true} onClose={handleClose}>
            <div className="modal-content">
                <img style={{ width: "70%" }} src={image} />
                <Typography variant="h4">{title}</Typography>
                <Typography variant="h6" color="primary"> ${price.toFixed(2)}</Typography>
                <Typography>stock: {stock}</Typography>
                <div className="modal-scroll-content">
                    <ItemCount stock={stock} initial={quantityInCart} onAdd={handleAddToCart} />
                </div>
            </div>
        </Modal>
    </>);
}

export default ProductInfo;