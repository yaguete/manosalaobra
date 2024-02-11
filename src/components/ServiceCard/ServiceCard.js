import './ServiceCard.css'

function ServiceCard ( { icono, titulo, detalle } ) {

    return (
        <>
        <div className="card service">
            <div className="card-body">
                <i className={icono}></i>
                <h4 className="card-title">{titulo}</h4>
                <h5 className="card-subtitle mb-2 text-body-secondary">{detalle}</h5>
            </div>
            </div> 
        </>
    )
}

export default ServiceCard;