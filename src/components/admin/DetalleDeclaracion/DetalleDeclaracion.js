import './DetalleDeclaracion.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import ModuloIGV from './ModuloIGV';
import ModuloIVAP from './ModuloIVAP';
import ModuloRenta from './ModuloRenta';

export default function DetalleDeclaracion() {

    const [activeButton, setActiveButton] = useState(0);

    const handleButtonClick = (index) => {
        setActiveButton(index);
    };

    return (
        <>
            <div className="ms-5">
                <div className="btn-group">
                    <Link
                        to="/621/detalleDeclaracion/igv/ventas"
                        className={`btn btn-option ${activeButton === 0 ? 'active' : ''}`}
                        onClick={() => handleButtonClick(0)}
                    >
                        IGV
                    </Link>
                    <Link
                        to="/621/detalleDeclaracion/ivap"
                        className={`btn btn-option ${activeButton === 1 ? 'active' : ''}`}
                        onClick={() => handleButtonClick(1)}
                    >
                        IVAP
                    </Link>
                    <Link
                        to="/621/detalleDeclaracion/renta"
                        className={`btn btn-option ${activeButton === 2 ? 'active' : ''}`}
                        onClick={() => handleButtonClick(2)}
                    >
                        Renta
                    </Link>
                </div>
            </div>
            <Routes>
                <Route path='/igv/*' element={< ModuloIGV/>} />
                <Route path='/ivap' element={< ModuloIVAP />} />
                <Route path='/renta' element={< ModuloRenta />} />
            </Routes>
        </>
    );
}
