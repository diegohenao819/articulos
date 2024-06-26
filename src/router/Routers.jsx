import { Route, Routes } from "react-router-dom";
import ArticuloDetalles from "../pages/ArticuloDetalles"; // Importar el componente
import ArticulosPage from "../pages/ArticulosPage";
import Crear from "../pages/Crear";
import Home from "../pages/Home";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articulos" element={<ArticulosPage />} />
            <Route path="/articulos/:id" element={<ArticuloDetalles />} />
            <Route path="/crear" element={<Crear />} />
        </Routes>
    );
};

export default AppRouter;
