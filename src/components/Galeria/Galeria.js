import './Galeria.css'
import Result from "../Form-Search/Result";

function Galeria( {results} ) {
    return (
        <div className="galeria">
            <ul>
                {results.map((proyecto) => (
                    <Result key={proyecto.titulo} proyecto={proyecto} />
                ))
                }
            </ul>
        </div>    
    );

}

export default Galeria;