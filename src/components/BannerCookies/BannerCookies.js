import "./BannerCookies.css"

function BannerCookies ({ acepta, rechaza} ) {

    return (
        <div className="bannerCookies">
            <div clasName="cookiesTexto">
                <img src="../images/Cookie.png" alt="Imagen de cookie"></img>
                <h3>¿Te hace una cookie?</h3>
                <p>Esta web usa cookies propias y de terceros para ofrecer un mejor servicio y realizar estadísticas de datos de uso. Acéptalas antes de seguir navegando para poder disfrutar de todos sus contenidos con plena funcionalidad.</p>
            </div>
            <button type="button" className="btn btn-outline-success" onClick={acepta}>
                <i className="bi bi-hand-thumbs-up"></i> Adelante con esas cookies
                </button>
            <button type="button" className="btn btn-outline-secondary" onClick={rechaza}>
                <i className="bi bi-hand-thumbs-down"></i> Nah... mejor no
                </button>

        </div>
    )
}

export default BannerCookies;