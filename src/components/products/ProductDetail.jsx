import { Card, CardContent, Grid, Typography } from "@mui/material";
import ProductInfo from "./ProductInfo";
import { useState } from "react";
import { Link } from 'react-router-dom';


const ProductDetail = ({ product, children }) => {
    const { id, image, title, price, category, itHadDues, isAnOffer, stock } = product
    const [isSelected, setIsSelected] = useState(false);

    const handleClick = () => {
        setIsSelected((prev) => !prev)
    }

    return (<>
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card className="card-products-container" >
                <img src={image} />
                <CardContent className="card-products-content">
                    <Typography>{title}</Typography>
                    <Typography>Categoría: {category}</Typography>
                    <Typography>${price.toFixed(2)}</Typography>
                    <Link to={`/product/${id}`}><button className="button2"> Mas información </button></Link>
                    <button className="button1" onClick={handleClick}> Agregar al carrito </button>


                </CardContent>
            </Card>

        </Grid>
        {
            isSelected &&
            <ProductInfo product={product} open={isSelected} setOpen={setIsSelected} />
        }
    </>
    );
}

export default ProductDetail;