import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";

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


    const formatDate = (isoString) => {
        const date = new Date(isoString);
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeZoneName: 'short',
        };
        return date.toLocaleDateString(undefined, options);
    };

    return (
        <Box className="articuloDetalles">
            <Typography variant="h2" color="primary" style={{marginBottom: "15px"}}>DETALLES</Typography>

            <div>
                <Typography variant="h3" style={{marginBottom: "15px"}}>  {articulo.titulo}</Typography>
            </div>
            <Typography variant="body1" style={{marginBottom: "15px"}}>
                
                {articulo.contenido}
            </Typography>
            <Typography variant="caption" style={{marginBottom: "15px"}}>{formatDate(articulo.fecha)}</Typography>
            {articulo.imageSrc ? (
                <img src={articulo.imageSrc} alt={articulo.titulo} />
            ) : (
                <img
                    src="https://th.bing.com/th/id/OIP.IeJW_BYnaLXx3q0Qvu21kAHaDX?rs=1&pid=ImgDetMain"
                    alt={articulo.titulo}
                />
            )}
        </Box>
    );
};

export default ArticuloDetalles;
