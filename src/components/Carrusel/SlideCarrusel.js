
function SlideCarrusel ({ imagen, alt, estado, descripcion, titulo }) {
    return (
        <div className={estado} data-bs-interval="4000">
            <img src= {imagen} className="d-block w-100" alt={alt} />
            <div className="carousel-caption d-none d-md-block">
                <h5>{titulo}</h5>
                <p>{descripcion}</p>
            </div>
        </div>
    );
}

export default SlideCarrusel;