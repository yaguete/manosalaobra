import './BloqueInicio.css';

function BloqueInicioB( {tipo, tema, titulo, parrafo, imagen, alt}) {
    return (
        <div className={tipo}>
            <div className="imagen-bloque-inicio"><img src={imagen} alt={alt} /></div>
            <div className="texto-inicio"> 
                <p className='texto-inicio-tema'>{tema}</p>
                <h1 className='texto-inicio-titulo'>{titulo}</h1>
                <p className='texto-inicio-parrafo'>{parrafo}</p>
            </div>
        </div>
    )
}

export default BloqueInicioB;