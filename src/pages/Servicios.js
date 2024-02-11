import { useState, useEffect } from "react";
import ListaServicios from "../components/ListaServicios/ListaServicios";
import TituloPagina from "../components/TituloPagina/TituloPagina";

function Servicios () {
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
                    const nuestrosServicios = data["Nuestros_servicios"];
                    setTitulopagina({
                        titulo: nuestrosServicios.titulo, 
                        parrafo: nuestrosServicios.parrafo});
                })
                .catch(error => console.error('Error:', error));
        }, []);


    const [servicios, setServicios] = useState([]);

    useEffect(() => {
        fetch('./Servicios.json')
            .then(response => {
                if (response.status !== 200) {
                    throw new Error('Error al cargar el listado de servicios');
                }
                return response.json();
            })
            .then(data => setServicios(data))
            .catch(error => console.error('Error al cargar la el listado de servicios:', error));
    }, []); // El array vacío asegura que esto se ejecute solo una vez

    return (
        <>
        <TituloPagina 
            TituloPaginaTitulo={titulopagina.titulo}
            TituloPaginaParrafo={titulopagina.parrafo} />
        <ListaServicios servicios={servicios}/>
        </>

    )


}

export default Servicios;

