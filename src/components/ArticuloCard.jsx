import PropTypes from 'prop-types';
import "./articuloCard.css";
import { useNavigate } from 'react-router-dom';


const ArticuloCard = ({ id, titulo, contenido, fecha, photo }) => {

    const navigate = useNavigate();


    const handleReadMore = () => {
        navigate(`/articulos/${id}`);
    };
    return (
        <div className='jumbo'>
            <img src={photo ? photo : "https://clipartcraft.com/images/newspaper-clipart-article.png"} alt="" />
            <h2>{titulo}</h2>
            <p>{contenido}</p>
            <p>{fecha}</p>
            <p>{id}</p>
            <button onClick={handleReadMore}>Read more</button>
        </div>
    )
}

ArticuloCard.propTypes = {
    id: PropTypes.string.isRequired, 
    titulo: PropTypes.string.isRequired,
    contenido: PropTypes.string.isRequired,
    fecha: PropTypes.string.isRequired,
    photo: PropTypes.string, 
};

export default ArticuloCard;
