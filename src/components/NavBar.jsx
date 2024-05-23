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


                    <NavLink to="/crear" className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                    >Crear Articulo</NavLink>


              





                </ul>
            </div>
            <Outlet />
        </>
    );
};

export default NavBar;
