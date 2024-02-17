import { useState, useEffect } from "react";
import emailjs from 'emailjs-com'
import './FormContact.css'

function FormContact() {

    const [servicios, setServicios] = useState([]);
    const [MostrarMensajedeExito, setMostrarMensajedeExito] = useState(false);
    const [MostrarMensajedeError, setMostrarMensajedeError] = useState(false);
    
        useEffect(() => {
            fetch(`${process.env.PUBLIC_URL}/Servicios.json`)
                .then(response => {
                    if (response.status !== 200) {
                        throw new Error('Error al cargar el listado de servicios');
                    }
                    return response.json();
                })
                .then(data => setServicios(data))
                .catch(error => console.error('Error al cargar la el listado de servicios:', error));
        }, []); // El array vacío asegura que esto se ejecute solo una vez
    
    const handleSubmit = (event) => {
        event.preventDefault(); // Evita el comportamiento predeterminado de envío del formulario

        // Envía el formulario utilizando EmailJS
        emailjs.sendForm('service_w6g2xvq', 'template_drbfvi3', event.target, '7o-XmdRmjxd8cXTq2')
            .then((result) => {
                setMostrarMensajedeExito(true); // Muestra el mensaje de éxito
                setTimeout(() => setMostrarMensajedeExito(false), 10000); // Oculta el mensaje después de 10 segundos
            }, (error) => {
                console.log('Error al enviar el formulario:', error.text);
                setMostrarMensajedeError(true); // Muestra el mensaje de error
                setTimeout(() => setMostrarMensajedeError(false), 10000); // Oculta el mensaje después de 10 segundos
            });

        // Limpia el formulario después del envío. Espera 2 segundos para que salga el mensaje de éxito o error antes de que se limpie el formulario
        setTimeout(() => event.target.reset(), 2000);
    };

    return (
        <div className='formulario-contacto'>
            <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Nombre" name="nombre" aria-label="Nombre" aria-describedby="basic-addon1" required/>
                </div>
            <div className="input-group mb-3">
                <input type="text" className="form-control" name="apellidos" placeholder="Apellidos" aria-label="Apellidos" aria-describedby="basic-addon1" required/>
                </div>
            <div className="input-group mb-3">
                <input type="email" className="form-control" name="email" placeholder="email" aria-label="email" aria-describedby="basic-addon1" required/>
                <input type="tel" className="form-control" name="telefono" placeholder="teléfono" aria-label="teléfono" aria-describedby="basic-addon1" required/>
                </div>
            <label className="form-label">¿En qué servicio estás interesado/a?</label>
            <div className="input-group mb-3">
                <select className="form-select" id="inputGroupSelect01" name="servicio">
                    <option selected>Elige uno...</option>
                    {
                        servicios.map((servicio, index) => (
                            <option key={index} value={servicio.titulo}>{servicio.titulo}</option>
                        ))}
                    <option value="Otro">Es otra cosa</option>
                    </select>
                    </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className ="form-label">Si quieres, explícanos tu caso</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" name="comentarios" rows="3"></textarea>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" name="tratamiento_datos" required/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Acepto el tratamiento de datos para que me contacten y conozco la cláusula adicional de protección de datos.</label>
                        </div>
                        {MostrarMensajedeExito && (
                        <div className="alert alert-success" role="alert">
                            ¡Solicitud de contacto enviada con éxito! Te contestaremos en seguida 😊</div>
                            )}
                        {MostrarMensajedeError && (
                        <div class="alert alert-danger" role="alert">
                            Vaya, algo ha salido mal: tu mensaje no ha podido ser enviado. Por favor, inténtalo de nuevo</div>
                            )}
                        <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
        </div>)}

export default FormContact;