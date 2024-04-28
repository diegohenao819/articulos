import { useEffect, useState } from "react";
import ArticuloCard from "../components/ArticuloCard";
import Global from "../helpers/Global";

const ArticulosPage = () => {
    const [articulos, setArticulos] = useState([]);

    useEffect(() => {
        conseguirArticulos();
    }, []);

    const conseguirArticulos = async () => {
        const datos = await fetch(Global.url + "articulos");
        const articulos = await datos.json();

        if (articulos.status === "success") {
            setArticulos(articulos.articulos);
            console.log(articulos.articulos);
        }
    };

    return articulos.length > 0 ? (
        articulos.map((articulo) => {
            return (
                <ArticuloCard
                    key={articulo.id}
                    titulo={articulo.titulo}
                    contenido={articulo.contenido}
                    fecha={articulo.fecha}
                />
            );
        })
    ) : (
        <h1> Loading... </h1>
    );
};

export default ArticulosPage;
