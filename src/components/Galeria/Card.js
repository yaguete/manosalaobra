import './Card.css'

function Card({ imagen, titulo, contenido, url }) {

    return (
        <div className="card">
            <img src={ imagen } className="card-img-top" alt="Imagen_proyecto" />
            <div className="card-body">
                <h5 className="card-title">{ titulo }</h5>
                <p className="card-text">{ contenido }</p>
                <a href={ url } className="btn btn-primary">Más info</a>
            </div>
        </div>
    )
}

export default Card;