import { useEffect, useState } from "react";
import ArticuloCard from "../components/ArticuloCard";
import Spinner from "../components/Spinner";
import Global from "../helpers/Global";
import axios from "axios";

const ArticulosPage = () => {
    const [articulos, setArticulos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        conseguirArticulos();
    }, []);

    const conseguirArticulos = async () => {
        try {
            const response = await fetch(Global.url + "articulos");
            const result = await response.json();

            if (result.status === "success") {
                const updatedArticulos = result.articulos.map(articulo => {
                    if (articulo.image && articulo.image.data && articulo.image.data.data) {
                        const binaryString = new Uint8Array(articulo.image.data.data).reduce((acc, byte) => acc + String.fromCharCode(byte), '');
                        const base64String = window.btoa(binaryString);
                        const imageSrc = `data:${articulo.image.contentType};base64,${base64String}`;
                        return {
                            ...articulo,
                            imageSrc
                        };
                    } else {
                        return {
                            ...articulo,
                            imageSrc: '' // You can set this to a default image or leave it empty
                        };
                    }
                });
                setArticulos(updatedArticulos);
            }
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteArticulo = async (id) => {
        try {
            await axios.delete(`${Global.url}articulo/${id}`);
            setArticulos(articulos.filter(articulo => articulo._id !== id));
        } catch (error) {
            setError(error);
        }
    };

    if (loading) {
        return <Spinner />;
    }

    if (error) {
        return <div>Error al cargar los artículos: {error.message}</div>;
    }

    return (
        <div>
            {articulos.map((articulo) => (
                <ArticuloCard
                    id={articulo._id}
                    key={articulo._id}
                    titulo={articulo.titulo}
                    contenido={articulo.contenido}
                    fecha={articulo.fecha}
                    photo={articulo.imageSrc}
                    onDelete={() => handleDeleteArticulo(articulo._id)}
                />
            ))}
        </div>
    );
};

export default ArticulosPage;
