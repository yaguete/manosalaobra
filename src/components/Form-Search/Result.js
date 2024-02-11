import Card from '../Galeria/Card';

function Result( {proyecto} ) {

    return (
        <li>
          <Card
            imagen={proyecto.imagen}
            titulo={proyecto.titulo}
            contenido={proyecto.contenido}
            url={proyecto.url}
          />
        </li>
      );
    }

export default Result;
