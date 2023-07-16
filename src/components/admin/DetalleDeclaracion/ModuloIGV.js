import { Link } from 'react-router-dom'
import './ModuloIGV.css'
import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import SubCompras from './SubCompras';
import SubVentas from './SubVentas';

export default function ModuloIGV() {

  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  return (
    <>
      <div className="ms-5 me-5 suboptions-x w-100">
        <div className="btn-group ventas-compras">
          <Link
            to="/621/detalleDeclaracion/igv/ventas"
            className={`btn btn-suboption ${activeButton === 0 ? 'active' : ''}`}
            onClick={() => handleButtonClick(0)}
          >
            Ventas
          </Link>
          <Link
            to="/621/detalleDeclaracion/igv/compras"
            className={`btn btn-suboption ${activeButton === 1 ? 'active' : ''}`}
            onClick={() => handleButtonClick(1)}
          >
            Compras
          </Link>
        </div>
      </div>
      <Routes>
        <Route path='/ventas'  element={<SubVentas/>} />
        <Route path='/compras' element={<SubCompras/>} />
      </Routes>
    </>
  )
}
