import axios from "axios";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "./articuloCard.css";

const ArticuloCard = ({ id, titulo, contenido, fecha, photo, onDelete }) => {
    const navigate = useNavigate();

    const handleReadMore = () => {
        navigate(`/articulos/${id}`);
    };

    const handleDelete = async () => {
        try {
            await axios.delete(`https://articulo-blog.vercel.app/api/articulo/${id}`);
            onDelete(); // Llamar a la función de eliminación del componente padre
            console.log(`Artículo con id ${id} eliminado`);
        } catch (error) {
            console.error("Error al eliminar el artículo:", error);
        }
    };

    return (
        <div className="jumbo">
            <img
                src={
                    photo
                        ? photo
                        : "https://th.bing.com/th/id/OIP.IeJW_BYnaLXx3q0Qvu21kAHaDX?rs=1&pid=ImgDetMain"
                }
                alt=""
            />
            <h2>{titulo}</h2>
            <p>{contenido}</p>
            <p>{fecha}</p>
            <p>{id}</p>
            <button onClick={handleReadMore}>Read more</button>
            <button onClick={handleDelete}>Eliminar</button>
        </div>
    );
};

ArticuloCard.propTypes = {
    id: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    contenido: PropTypes.string.isRequired,
    fecha: PropTypes.string.isRequired,
    photo: PropTypes.string,
    onDelete: PropTypes.func.isRequired,
};

export default ArticuloCard;
