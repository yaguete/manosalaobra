import TituloPagina from "../components/TituloPagina/TituloPagina";
import Equipo from "../components/Equipo/Equipo";
import { useState, useEffect } from "react";

function QuienesSomos () {

    const [titulopagina, setTitulopagina] = useState({titulo: '', parrafo: ''});
        useEffect(() => {
            fetch('./TitulosPaginas.json')
                .then(response=> {
                    if (response.status !== 200) {
                        throw new Error('Error al cargar el título de la página');
                    }
                    return response.json();
                })
                .then(data => {
                    const quienesSomos = data["Quienes_somos"];
                    setTitulopagina({
                        titulo: quienesSomos.titulo, 
                        parrafo: quienesSomos.parrafo});
                })
                .catch(error => console.error('Error:', error));
        }, []);

    const [equipo, setEquipo] = useState([]);
    
        useEffect(() => {
            fetch('./Equipo.json')
                .then(response => {
                    if (response.status !== 200) {
                        throw new Error('Error al cargar el listado de Equipo');
                    }
                    return response.json();
                })
                .then(data => setEquipo(data))
                .catch(error => console.error('Error al cargar el equipo:', error));
        }, []); // El array vacío asegura que esto se ejecute solo una vez

    return (
        <>
        <TituloPagina 
            TituloPaginaTitulo={titulopagina.titulo}
            TituloPaginaParrafo={titulopagina.parrafo} />
        <Equipo equipo={equipo}/>
        <h1 style={{margin:70}}>
                Así curramos
                </h1>
        <div className="VideoVimeo">
            <iframe
                title="video random de obras"
                src="https://player.vimeo.com/video/158388973?h=018e537777&title=0&byline=0&portrait=0" 
                allow="autoplay; fullscreen; picture-in-picture" 
                allowFullScreen>
                </iframe>
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>
        </>
    )
}

export default QuienesSomos;