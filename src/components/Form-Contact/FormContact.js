import { useState, useEffect } from "react";
import './FormContact.css'

function FormContact() {

    const [servicios, setServicios] = useState([]);
    
        useEffect(() => {
            fetch('./Servicios.json')
                .then(response => {
                    if (response.status !== 200) {
                        throw new Error('Error al cargar el listado de servicios');
                    }
                    return response.json();
                })
                .then(data => setServicios(data))
                .catch(error => console.error('Error al cargar la el listado de servicios:', error));
        }, []); // El array vacío asegura que esto se ejecute solo una vez
    
    const handleSubmit = async (event) => {
        event.preventDefault(); // Evita el comportamiento predeterminado de envío del formulario
        // Crear un objeto FormData para recoger todos los valores del formulario
        const formData = new FormData(event.target);
        const data = {};
        formData.forEach((valor, clave) => (data[clave] = valor));

        // Opción para realizar la solicitud POST
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        };

        try {
            // Realizar la solicitud POST
            const response = await fetch('', requestOptions);
            if (!response.ok) {
                throw new Error('Parece que algo ha ido mal: ' + response.statusText);
            }
            const result = await response.json();
            console.log('Formulario enviado con éxito:', result);
        } catch (error) {
            // Manejar el error aquí
            console.error('Error al enviar el formulario:', error);
        }
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
                            <option value={servicio.titulo}>{servicio.titulo}</option>
                        ))
                        }
                    <option value="Otro">Es otra cosa</option>
                    </select>
                    </div>
            <div class="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className ="form-label">Si quieres, explícanos tu caso</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" name="comentarios" rows="3"></textarea>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" name="tratamiento_datos" required/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Acepto el tratamiento de datos para que me contacten y conozco la cláusula adicional de protección de datos.</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
        </div>)}

export default FormContact;