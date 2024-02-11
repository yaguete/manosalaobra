import ServiceCard from "../ServiceCard/ServiceCard";
import './ListaServicios.css'

function ListaServicios ( {servicios, index} ) {
    return (
        <div className="lista-servicios">
            {servicios.map((servicio, index) => (
            <div className="servicio" key={index}> 
                <ServiceCard
                    icono={servicio.icono}
                    titulo={servicio.titulo}
                    detalle={servicio.detalle}
                    />
                </div>
                ))}
        </div>
    )
} 

export default ListaServicios;