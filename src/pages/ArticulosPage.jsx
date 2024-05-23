import { useEffect, useState } from "react";
import ArticuloCard from "../components/ArticuloCard";
import Spinner from "../components/Spinner";
import Global from "../helpers/Global";

const ArticulosPage = () => {
    const [articulos, setArticulos] = useState([]);

    useEffect(() => {
        conseguirArticulos();
    }, []);

    const conseguirArticulos = async () => {
        const response = await fetch(Global.url + "articulos");
        const result = await response.json();
    
        if (result.status === "success") {
            const updatedArticulos = result.articulos.map(articulo => {
                // Check if image data exists
                if (articulo.image && articulo.image.data && articulo.image.data.data) {
                    // Convert byte array to base64 string
                    const binaryString = new Uint8Array(articulo.image.data.data).reduce((acc, byte) => acc + String.fromCharCode(byte), '');
                    const base64String = window.btoa(binaryString);
    
                    const imageSrc = `data:${articulo.image.contentType};base64,${base64String}`;
                    
                    // Return article with imageSrc
                    return {
                        ...articulo,
                        imageSrc
                    };
                } else {
                    // Return article without imageSrc if no image data is present
                    return {
                        ...articulo,
                        imageSrc: '' // You can set this to a default image or leave it empty
                    };
                }
            });
            setArticulos(updatedArticulos);
        }
    };
    

    return articulos.length > 0 ? (
        articulos.map((articulo) => (
            <ArticuloCard
                id={articulo._id}
                key={articulo._id}
                titulo={articulo.titulo}
                contenido={articulo.contenido}
                fecha={articulo.fecha}
                photo={articulo.imageSrc}
            />
        ))
    ) : (
        <Spinner />
    );
};

export default ArticulosPage;
