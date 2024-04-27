import { Route, Routes } from "react-router-dom";
import ArticulosPage from "../pages/ArticulosPage";
import Crear from "../pages/Crear";
import Home from "../pages/Home";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articulos" element={<ArticulosPage />} />
            <Route path="/crear" element={<Crear />} />
        </Routes>
    );
};

export default AppRouter;
