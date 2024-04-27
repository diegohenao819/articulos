import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./general.css";
import ArticulosPage from "./pages/ArticulosPage";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Crear from "./pages/Crear";

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
