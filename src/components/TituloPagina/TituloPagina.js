import './TituloPagina.css'

function TituloPagina({ TituloPaginaTitulo, TituloPaginaParrafo }) {

    return (
        <div className='titulo-pagina'>
            <h1 className='titulo-pagina-titulo'>{TituloPaginaTitulo}</h1>
            <p className='titulo-pagina-parrafo'>{TituloPaginaParrafo}</p>
        </div>
    )
}

export default TituloPagina;