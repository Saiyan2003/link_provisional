import './Header.css';
import React, { useEffect, useState } from 'react'

export default function Header() {

    const [fechaActual, setFechaActual] = useState("");
    const [horaActual, setHoraActual] = useState("");

    const obtenerFechaActual = () => {
        const fecha = new Date();
        const dia = fecha.getDate();
        const mes = fecha.getMonth() + 1;
        const anio = fecha.getFullYear();

        return `${agregarCeros(dia)}/${agregarCeros(mes)}/${anio}`;
    };

    const obtenerHoraActual = () => {
        const fecha = new Date();
        const horas = fecha.getHours();
        const minutos = fecha.getMinutes();

        return `${agregarCeros(horas)}:${agregarCeros(minutos)}`;
    };

    const agregarCeros = (valor) => {
        return valor < 10 ? `0${valor}` : valor;
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const fecha = obtenerFechaActual();
            const hora = obtenerHoraActual();

            setFechaActual(fecha);
            setHoraActual(hora);
        }, 1000);

        return () => clearInterval(interval);
        // eslint-disable-next-line
    }, []);

    const [ruc, setRuc] = useState('');
    const [razonSocial, setRazonSocial] = useState('');

    const handleRucChange = (event) => {
        let newRuc = event.target.value;
        
        // Limitar la longitud del RUC a 11 dígitos
        if (newRuc.length > 11) {
          newRuc = newRuc.slice(0, 11);
        }
        
        setRuc(newRuc);
        localStorage.setItem('RUC', newRuc);
      };
      

    const handleRazonSocialChange = (event) => {
        const newRazonSocial = event.target.value;
        setRazonSocial(newRazonSocial);
        localStorage.setItem('RazonSocial', newRazonSocial);
    };

    return (
        <>
            <header className="header-1">
                <div className="logo">
                    <h2>CULTURA CONTABLE</h2>
                </div>
                <div className="options-header">
                    <button className="buttons-special">
                        <i className="fa-solid fa-cart-shopping"></i>
                        <h6>Bandeja de Presentación/ Pagos</h6>
                        <i className="fa-sharp fa-solid fa-caret-down arrow-left"></i>
                    </button>
                    <button className="buttons-header">
                        <i className="fa-solid fa-envelope"></i>
                        <h6>Buzón Electrónico</h6>
                    </button>
                    <button className="buttons-header">
                        <i className="fa-solid fa-star"></i>
                        <h6>Favoritos</h6>
                    </button>
                    <button className="buttons-header">
                        <i className="fa-solid fa-print"></i>
                        <h6>Imprimir</h6>
                    </button>
                </div>
            </header>
            <header className="header-2">
                <div className="datetime">
                    <div className="date">
                        {fechaActual}
                    </div>
                    <div className="time">
                        {horaActual}
                    </div>
                </div>
                <div className="welcome">
                    <div className="title-welcome">
                        Bienvenido
                    </div>
                    <div className="input-container">
                        <input
                            type="text"
                            className="color-input"
                            placeholder="RUC"
                            value={ruc}
                            onChange={handleRucChange}
                            maxLength={11}
                        />
                        <input
                            type="text"
                            className="color-input"
                            placeholder="Razon Social"
                            value={razonSocial}
                            onChange={handleRazonSocialChange}
                        />
                    </div>
                    <div>
                        Domicilio: Habido
                    </div>
                </div>
                <button className="button-salir">Salir</button>
            </header>
        </>
    )
}
