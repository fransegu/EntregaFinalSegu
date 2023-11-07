import React, { useState } from "react";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, } from "@mui/material";
import { useCartContext } from "../../context/CartContext";
// import ProductList from "../products/ProductList";
import { useForm } from "react-hook-form";
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDkdDoQREyaiRsfSqZGms80KAta0Sd6goo",
    authDomain: "storenemesis-10609.firebaseapp.com",
    projectId: "storenemesis-10609",
    storageBucket: "storenemesis-10609.appspot.com",
    messagingSenderId: "685729760806",
    appId: "1:685729760806:web:5b7da1b6f4025bb96208e7"
};

//


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const Cart = () => {
const { cart, vaciarCarrito } = useCartContext();

console.log(cart);
const { register, handleSubmit } = useForm();
const [pedidoId, setPedidoId] = useState("");


    const enviar = (data) => {
        const pedido = {
            cliente: data,
            productos: cart,
            total: cart.total.toFixed(2),
        }
        
    const pedidosRef = collection(db, "pedidos");
    addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id);
                console.log(pedidoId);
                vaciarCarrito();
            })
    }
    if (pedidoId) {
        
        return (
            
            <div className="container2">
                <h1 className="tituloFinalizado">Muchas gracias por tu compra</h1>
                <p className="parrafoFinalizado">Tu número de pedido es: {pedidoId}</p>
                <a className="button1" href="/categories">Volver a comprar</a>
            </div>
    
        )

    }
    return (

        <div className="container2">

            <Paper elevation={3}>
            <Typography variant="h3" align="center" style={{ color: "#8F8C8C" }}>
            Carrito
        </Typography>
                {cart.items.length === 0 ? (
                    <Typography variant="body2" align="center" sx={{ p: 2 }}>
                        Este carrito de compras se encuentra vacío.
                        Por favor elija productos para continuar comprando.
                    </Typography>
                ) : (
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Imagen</TableCell>
                                    <TableCell>Producto</TableCell>
                                    <TableCell>Cantidad</TableCell>
                                    <TableCell>Precio</TableCell>
                                    <TableCell>Total</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {cart.items.map((item) => (
                                    <TableRow key={item.id}>
                                        <TableCell><img style={{ width: "10%", height: "10%" }} src={item.image} alt={item.title} /></TableCell>
                                        <TableCell>{item.title}</TableCell>
                                        <TableCell>{item.quantity}</TableCell>
                                        <TableCell>${item.price}</TableCell>
                                        <TableCell>${(item.price * item.quantity).toFixed(2)}</TableCell>
                                    </TableRow>
                                )
                                )}
                                <TableRow>
                                    <TableCell colSpan={3}>Total:</TableCell>
                                    <TableCell><b>${cart.total.toFixed(2)}</b></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>

                        <div>
                            
                            <div className="container">
                            <hr/>
                            <Typography variant="h3" style={{ color: "#8F8C8C" }}>
            Finalizar compra
        </Typography>
                                <form className="formulario" onSubmit={handleSubmit(enviar)}>

                                    <input  type="text" autoComplete="off" placeholder="Ingresá tu nombre" {...register("nombre")} />
                                    <input  type="email" autoComplete="off" placeholder="Ingresá tu E-mail" {...register("email")} />
                                    <input  type="phone" autoComplete="off" placeholder="Ingresá tu teléfono" {...register("telefono")} />

                                    <button className="button1" type="submit">Enviar</button>

                                </form>
                            </div>
                            <div>

                            </div>

                        </div>

                    </TableContainer>



                )
                }
            </Paper>

        </div>
    );
};

export default Cart;