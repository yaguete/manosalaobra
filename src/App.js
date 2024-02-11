import { Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import BannerCookies from './components/BannerCookies/BannerCookies';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Inicio from './pages/Inicio';
import NuestrasObras from './pages/NuestrasObras'
import QuienesSomos from './pages/QuienesSomos';
import Servicios from './pages/Servicios';
import Contacto from './pages/Contacto';


function App() {

  const [mostrarBannerCookies, setMostrarBannerCookies] = useState(false);
  useEffect(() => {
    /* Comprobamos el valor de la cookie actual:
      1- Accedemos a las cookies almacenadas
      2- Dividimos las cookies en una lista de cookies individuales basado en el separador ';'
      3- Buscamos en la lista de cookies aceptadas la primera que comience con el prefijo 'cookiesAceptadas'
      4- Si hay alguna cookie que coincida con el prefijo 'cookiesAceptadas', la dividimos en dos elementos: el que está a la izquierda y el que está a la derecha de "="
      5- Accedemos al segundo elemento (el que está a la izquierda de "="), que corresponde al valor de 'cookiesAceptadas'
    Al final, "valorDeLaCoookie tomará el valor "undefined" si no hay cookie, o el valor de la cookie (si ésta existe)*/
    const valorDeLaCookie = document.cookie
      .split('; ')
      .find(row => row.startsWith('cookiesAceptadas='))
      ?.split('=')[1];

    /*Si el parámetro valorDeLaCookie es 'undefined', entonces se establece "true" en el estado de setMostrarBannerCookies... y el Banner aparece. De lo contrario no aparece*/
    if (!valorDeLaCookie) {
      setMostrarBannerCookies(true);}
    }, []);

    /*Si aparece, y el usuario Acepta, se genera una cookie con un año de caducidad:
    1- Esteblecemos un parámetro con la fecha en la que ha aceptado
    2- Generamos la fecha de caducidad sumándole un año a la fecha actual, y formateándolo a UTC -universal-
    3- Escribimos y guardamos la cookie y establecemos en "false" el estado de setMostrarBannerCookies */
    const handleAcepta = () => {
      const fecha_aceptacion = new Date();
      const anoSiguiente = new Date(fecha_aceptacion
        .setFullYear(fecha_aceptacion
          .getFullYear() + 1))
          .toUTCString();
      document.cookie = `cookiesAceptadas=true; expires=${anoSiguiente}; path=/`;
      setMostrarBannerCookies(false);
    };
  
    /*Si el usuario rechaza la cookie no grabamos nada (no sé qué habría que hacer en este caso)*/
    const handleRechaza = () => {
      setMostrarBannerCookies(false);
    };

  return (
    <>
    {mostrarBannerCookies && 
    <BannerCookies acepta={handleAcepta} rechaza={handleRechaza} />}
    <Navbar />
    <Routes>
      <Route path='/manosalaobra' element={ <Inicio/> } />
      <Route path='/manosalaobra/quienes-somos' element={ <QuienesSomos /> } />
      <Route path='/manosalaobra/proyectos' element={ <NuestrasObras/> }  />
      <Route path='/manosalaobra/servicios' element={ <Servicios/> }  />
      <Route path='/manosalaobra/contacto' element={<Contacto/>} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;