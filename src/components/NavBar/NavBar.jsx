import { AppBar, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {

    return (
        <AppBar sx={{ backgroundColor: "#8a8a8a" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
                <NavLink className="navbar-link" to="/">
                    <Typography >
                        Inicio
                    </Typography>
                </NavLink>
                <NavLink className="navbar-link" to="/categories">
                    <Typography >
                        Categorias
                    </Typography>
                </NavLink>
                <NavLink className="navbar-link" to="/products">
                    <Typography >
                       Todos los productos
                    </Typography>
                </NavLink>
                <NavLink className="navbar-link" to="/cart">
                    <CartWidget />
                </NavLink>

            </Toolbar>
        </AppBar>
    );
}

export default Navbar;