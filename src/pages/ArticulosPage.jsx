import { useEffect, useState } from "react";
import ArticuloCard from "../components/ArticuloCard";
import Global from "../helpers/Global";
import Spinner from "../components/Spinner";

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
        <Spinner />
    );
};

export default ArticulosPage;
