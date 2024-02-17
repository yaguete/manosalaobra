import Card from '../Galeria/Card';

function Result( {proyecto} ) {

    return (
        <li>
          <Card
            imagen={`${process.env.PUBLIC_URL}/images/${proyecto.imagen}`}
            titulo={proyecto.titulo}
            contenido={proyecto.contenido}
            url={proyecto.url}
          />
        </li>
      );
    }

export default Result;
