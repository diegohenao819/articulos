

import PropTypes from 'prop-types';
import "./articuloCard.css";

const ArticuloCard = ({ titulo, contenido, fecha, photo }) => {
    return (
        <div className='jumbo'>
            <img src={photo? photo : "https://clipartcraft.com/images/newspaper-clipart-article.png"} alt="" />
            <h2>{titulo}</h2>
            <p>{contenido}</p>
            <p>{fecha}</p>
        </div>
    )
}

ArticuloCard.propTypes = {
    titulo: PropTypes.string.isRequired,
    contenido: PropTypes.string.isRequired,
    fecha: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired
};

export default ArticuloCard