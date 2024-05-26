import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import axios from "axios";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "./articuloCard.css";

const ArticuloCard = ({ id, titulo, contenido, fecha, photo, onDelete }) => {
    const navigate = useNavigate();



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


    const handleReadMore = () => {
        navigate(`/articulos/${id}`);
    };

    const handleDelete = async () => {
        try {
            await axios.delete(`https://articulo-blog.vercel.app/api/articulo/${id}`);
            onDelete();
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
            <Typography variant="h1" sx={{
                color: 'primary',  // Using a theme color
                fontSize: '2.5rem',     // Custom font size
                fontWeight: 'bold',     // Custom font weight
                marginBottom: '1rem',   // Custom margin

                textTransform: 'uppercase', // Uppercase text
            }}>{titulo}</Typography>

            <Typography variant="body1" color="secondary" >{contenido}</Typography>
            <Typography variant="caption">{formatDate(fecha)}</Typography>
            <br />
            <Typography variant='caption'>{id}</Typography>
            <br />
            <Button variant="contained" color="primary" onClick={handleReadMore}>Read more</Button>
            <Button variant="contained" color="error" onClick={handleDelete} className='button-eliminar'>Eliminar</Button>
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
