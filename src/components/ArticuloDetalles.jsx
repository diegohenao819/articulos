import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./articuloDetalles.css";

const ArticuloDetalles = () => {
    const params = useParams();
    const { id } = useParams();
    const [articulo, setArticulo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log("eso es params" + JSON.stringify(params));
        const fetchArticulo = async () => {
            try {
                const response = await axios.get(
                    `https://articulo-blog.vercel.app/api/articulo/${id}`
                );
                const articulo = response.data.articulo;

                // Convertir imagen a base64
                if (articulo.image && articulo.image.data && articulo.image.data.data) {
                    const binaryString = new Uint8Array(articulo.image.data.data).reduce(
                        (acc, byte) => acc + String.fromCharCode(byte),
                        ""
                    );
                    const base64String = window.btoa(binaryString);
                    articulo.imageSrc = `data:${articulo.image.contentType};base64,${base64String}`;
                } else {
                    articulo.imageSrc = ""; 
                }

                setArticulo(articulo);
                console.log("esto es response" + JSON.stringify(response.data));
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchArticulo();
    }, [id]);

    if (loading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>Error al cargar el artículo: {error.message}</div>;
    }

    return (
        <div className="articuloDetalles">
            <h2>DETALLES</h2>

            <h1>
                <strong>Titulo </strong> {articulo.titulo}
            </h1>
            <p>
                {" "}
                <strong>Contenido: </strong> {articulo.contenido}
            </p>
            <p>
                <strong>fecha: </strong> {articulo.fecha}
            </p>
            {articulo.imageSrc ? (
                <img src={articulo.imageSrc} alt={articulo.titulo} />
            ) : (
                <img
                    src="https://th.bing.com/th/id/OIP.IeJW_BYnaLXx3q0Qvu21kAHaDX?rs=1&pid=ImgDetMain"
                    alt={articulo.titulo}
                />
            )}
        </div>
    );
};

export default ArticuloDetalles;
