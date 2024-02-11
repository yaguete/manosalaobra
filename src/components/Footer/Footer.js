import "./Footer.css"

function Footer (){
    
    // Abrir URL en una nueva pestaña
    const abrirUrl = (url) => {
        window.open(url, '_blank');
    }

    // Obtener el año actual
    const anhoactual = new Date().getFullYear();

    return (
        <div className="footer">
            <div className="redes">
                <button className="btn btn-outline-light" type="button" onClick={() => abrirUrl('https://twitter.com/ferrovial')}>
                    <i className="bi bi-twitter-x"></i>
                </button>
                <button className="btn btn-outline-light" type="button" onClick={() => abrirUrl('https://www.facebook.com/ferrovial')}>
                    <i className="bi bi-facebook"></i>
                </button>
                <button className="btn btn-outline-light" type="button" onClick={() => abrirUrl('https://www.tiktok.com/@ferrovial')}>
                    <i className="bi bi-tiktok"></i>
                </button>
                <button className="btn btn-outline-light" type="button" onClick={() => abrirUrl('https://www.pinterest.es/ferrovial')}>
                    <i className="bi bi-pinterest"></i>
                </button>
                <button className="btn btn-outline-light" type="button" onClick={() => abrirUrl('https://www.youtube.com/ferrovial')}>
                    <i className="bi bi-youtube"></i>
                </button>
            </div>
            <div className="copyright"> 
                <p>&copy; {anhoactual} Manos a la obra. Todos los derechos reservados.</p></div>
            </div>
    )
}

export default Footer;
