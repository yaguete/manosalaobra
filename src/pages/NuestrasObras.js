import '../App.css';
import React, { useState, useEffect } from 'react';
import Galeria from '../components/Galeria/Galeria';
import Search from '../components/Form-Search/Search';
import TituloPagina from '../components/TituloPagina/TituloPagina';

function NuestrasObras(){

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
                    const casosExito = data["Casos_exito"];
                    setTitulopagina({
                        titulo: casosExito.titulo, 
                        parrafo: casosExito.parrafo});
                })
                .catch(error => console.error('Error:', error));
        }, []);

    const [proyectos, setProyectos] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const onChangeHandle = (event) => {
        setSearchText(event.target.value);
    };
    
    useEffect(() => {
        fetch('./Proyectos.json')
            .then(response => {
                if (response.status !== 200) {
                    throw new Error('Error al cargar el listado de proyectos');
                }
                return response.json();
            })
            .then(data => setProyectos(data))
            .catch(error => console.error('Error al cargar la el listado de proyectos:', error));
    }, []); // El array vacío asegura que esto se ejecute solo una vez

    useEffect(() => {
        const searchTextLower = searchText.toLowerCase();
        const filteredResults = Object.values(proyectos).filter(proyecto =>
        proyecto.titulo.toLowerCase().includes(searchTextLower) || proyecto.contenido.toLowerCase().includes(searchTextLower)
    ); 
    setSearchResults(filteredResults)}, [searchText, proyectos]);

    return (
        <>
        <TituloPagina 
            TituloPaginaTitulo={titulopagina.titulo}
            TituloPaginaParrafo={titulopagina.parrafo} />
        <Search changeHandle={onChangeHandle} searchText={searchText}/>
        <Galeria results={searchText.trim() === "" ? Object.values(proyectos) : searchResults}/>
        </>
    );
}

export default NuestrasObras;
