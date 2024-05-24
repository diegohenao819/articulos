import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ArticuloDetalles from "./components/ArticuloDetalles";
import NavBar from "./components/NavBar";
import "./general.css";
import ArticulosPage from "./pages/ArticulosPage";
import Crear from "./pages/Crear";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    element: <NavBar />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/articulos",
        element: <ArticulosPage />,
      },
      {
        path: "/crear",
        element: <Crear />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "/articulos/:id",
        element: <ArticuloDetalles />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
