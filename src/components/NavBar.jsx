import { NavLink, Outlet } from "react-router-dom";
import "./navbar.css";
import { Button } from "@mui/material";
const NavBar = () => {
    return (
        <>
            <div className="navbar">
                <ul>
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                       HOME
                    </NavLink>

                    <NavLink
                        to="/crear"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        CREATE ARTICLE
                    </NavLink>
                </ul>
            </div>
            <Outlet />
        </>
    );
};

export default NavBar;
