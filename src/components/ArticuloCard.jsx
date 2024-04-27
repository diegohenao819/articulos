

import PropTypes from 'prop-types';
import "./articuloCard.css";

const ArticuloCard = ({ titulo, contenido, fecha }) => {
    return (
        <div className='jumbo'>
            <h2>{titulo}</h2>
            <p>{contenido}</p>
            <p>{fecha}</p>
        </div>
    )
}

ArticuloCard.propTypes = {
    titulo: PropTypes.string.isRequired,
    contenido: PropTypes.string.isRequired,
    fecha: PropTypes.string.isRequired
};

export default ArticuloCard