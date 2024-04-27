import { NavLink, Outlet } from "react-router-dom";
import "./navbar.css";
const NavBar = () => {
    return (
        <>
            <div className="navbar">
                <ul>
                    <NavLink to="/" className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                    >Home</NavLink>
                    <NavLink to="/articulos" className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                    >Articulos</NavLink>
                    <NavLink to="/crear" className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                    >Crear</NavLink>
                </ul>
            </div>
            <Outlet />
        </>
    );
};

export default NavBar;
