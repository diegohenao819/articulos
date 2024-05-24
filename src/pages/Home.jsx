import ArticuloDetalles from "../components/ArticuloDetalles";
import ArticulosPage from "./ArticulosPage";

const Home = () => {
  return (
    <>
      <h1 style={{ color: "gold", fontSize: "34px", textAlign: "center" }}>
        Prueba Técnica: CloudLabs Learning
      </h1>

      <ArticulosPage />
      <ArticuloDetalles />
    </>
  );
};

export default Home;
