import React, { useState, useEffect } from 'react';
import FormContact from "../components/Form-Contact/FormContact";
import TituloPagina from '../components/TituloPagina/TituloPagina'

function Contacto () {

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
                    const tituloContacto = data["Contacto"];
                    setTitulopagina({
                        titulo: tituloContacto.titulo, 
                        parrafo: tituloContacto.parrafo});
                })
                .catch(error => console.error('Error:', error));
        }, []);

    return (
        <>
        <TituloPagina 
            TituloPaginaTitulo={titulopagina.titulo}
            TituloPaginaParrafo={titulopagina.parrafo} />
        <FormContact />
        </>
    )
}

export default Contacto;