import BloqueInicioA from "../components/BloqueInicio/BloqueInicioA";
import BloqueInicioB from "../components/BloqueInicio/BloqueInicioB";
import Carrusel from "../components/Carrusel/Carrusel";
import '../App.css';

function Inicio() {
    return (
        <>
        <div className="carousel-container">
        <div className="titulo-web">
            <h1>Manos a la obra</h1>
            <h4>The innovative construction brand</h4></div>
        <Carrusel />
        <BloqueInicioA 
            tipo={"bloque-inicio-uno"}
            tema={"SOSTENIBILIDAD"}
            titulo={"Construimos un futuro mejor"}
            parrafo={"En Manos a la Obra somos conscientes del rol que tenemos como impulsor del cambio en la sociedad por lo que la sostenibilidad es un pilar fundamental de nuestras actividades. Enfocamos nuestra visión ASG a aquellas áreas en las que la organización puede generar mayores impactos en los ámbitos ambiental (economía circular, lucha contra el cambio climático, capital natural, agua, ciudades sostenibles), social (personas y comunidades) y de gobernanza (ética y derechos humanos, transparencia, innovación, finanzas sostenibles, gestión de riesgos)"}
            imagen={"../images/Inicio-1.png"}
            alt={"Cifras impacto social"}
            />
        <BloqueInicioB
            tipo={"bloque-inicio-par"}
            tema={"INNOVACIÓN"}
            titulo={"Imaginamos soluciones"}
            parrafo={"Damos forma a las ideas. Transformamos nuestro entorno con talento y energía. Fomentamos la cultura de la innovación y trabajamos con un modelo abierto para impulsar el cambio"}
            imagen={"../images/Inicio-2.png"}
            alt={"Cifras impacto social"}
            />
        <BloqueInicioA
            tipo={"bloque-inicio-impar"}
            tema={"INNOVACIÓN"}
            titulo={"Imaginamos soluciones"}
            parrafo={"Damos forma a las ideas. Transformamos nuestro entorno con talento y energía. Fomentamos la cultura de la innovación y trabajamos con un modelo abierto para impulsar el cambio"}
            imagen={"../images/Inicio-2.png"}
            alt={"Cifras impacto social"}
            />
        <BloqueInicioA 
            tipo={"bloque-inicio-uno"}
            tema={"COMPROMISO"}
            titulo={"Alineados con los ODS"}
            parrafo={"Los Objetivos de Desarrollo Sostenible (ODS) de la Organización de las Naciones Unidas son los retos que el mundo se marca para poner fin a la pobreza, proteger el planeta y garantizar la paz y prosperidad de todas las naciones antes de 2030. Los 17 ODS, con sus 169 metas, promueven y dirigen la colaboración entre las personas, gobiernos y empresas. Nosotros integramos los ODS en la nueva Política Marco de Sostenibilidad y perseguimos su cumplimiento en todas las actividades de la compañía."}
            imagen={"../images/ODS.png"}
            alt={"Imagen ODS"}
            />
        </div>
        </>
       
    );

}

export default Inicio;