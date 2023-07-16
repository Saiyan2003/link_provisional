import React, { useState } from 'react';
import './RentaMensual.css';
import { Link } from 'react-router-dom';

export default function HeaderRentaMensual() {

    const [activeButton, setActiveButton] = useState('infoGeneral');

    const handleButtonClick = (buttonId) => {
      setActiveButton(buttonId);
    };

    return (
        <div className="home-content pt-2">
            <div className="alert alert-warning ms-5 me-5 mt-2 d-flex justify-content-between" role="alert">
                <span className="align-self-center">
                    <span className='span-bold' > Sr. Contribuyente </span>
                    , luego de llenar el formulario, asegúrese de agregarlo a la
                    <span className='span-bold' > bandeja. </span>
                </span>
                <i className="fa-solid fa-check align-self-center" ></i>
            </div>
            <div className="alert alert-dark text-white bg-gray-700 ms-5 me-5 mt-2 d-flex justify-content-between"
                role="alert">
                <div>
                    <span className="align-self-center">0621 IGV Renta Mensual</span>
                    <i className="fa-solid fa-circle-info"></i>
                </div>
                <i className="fas fa-star align-self-center"></i>
            </div>
            <div className="btn-group ms-5" role="group" aria-label="Basic example">
                <Link
                    type="button"
                    className={`btn btn-submenu ${activeButton === 'infoGeneral' ? 'header-rm-active' : ''}`}
                    to={'/621/infoGeneral'}
                    onClick={() => handleButtonClick('infoGeneral')}
                    style={{ outline: 'none' }}
                >
                    Informacion<br /> General
                </Link>
                <Link
                    type="button"
                    className={`btn btn-submenu ${activeButton === 'detalleDeclaracion' ? 'header-rm-active' : ''}`}
                    to={'/621/detalleDeclaracion/igv/ventas'}
                    onClick={() => handleButtonClick('detalleDeclaracion')}
                >
                    Detalle de <br />Declaracion
                </Link>
                <Link
                    type="button"
                    className={`btn btn-submenu ${activeButton === 'determinacionDeuda' ? 'header-rm-active' : ''}`}
                    to={'/621/determinacionDeuda'}
                    onClick={() => handleButtonClick('determinacionDeuda')}
                >
                    Determinación<br /> de la Deuda
                </Link>
            </div>
            <div className="border-top border-2 border-light ms-5 me-5">
            </div>
        </div>
    )
}
