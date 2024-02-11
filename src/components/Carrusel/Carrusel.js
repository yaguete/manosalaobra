import './Carrusel.css'
import BotonesCarrusel from "./BotonesCarrusel";
import SlideCarrusel from "./SlideCarrusel";

function Carrusel () {

    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <SlideCarrusel 
                    estado={"carousel-item active"}
                    alt={"Primera imagen de portada"} 
                    imagen={"../images/slide-1.jpg"}
                    titulo={"Lo petamos fuerte"}
                    descripcion={"Esta es una pequeña descripción de la imagen"}/>
                <SlideCarrusel 
                    estado={"carousel-item"}
                    alt={"Segunda imagen de portada"} 
                    imagen={"../images/slide-2.jpg"}
                    titulo={"Aquí también lo petamos fuerte"}
                    descripcion={"Esta es otra pequeña descripción de la imagen"}/>
                <SlideCarrusel 
                    estado={"carousel-item"}
                    alt={"Tercera imagen de portada"} 
                    imagen={"../images/slide-3.jpg"}
                    titulo={"Efectivamente, aquí también lo petamos fuerte"}
                    descripcion={"Esta otra descripción más de la imagen"}/>
            </div>
            <BotonesCarrusel />
        </div>
        )
    }

export default Carrusel;
