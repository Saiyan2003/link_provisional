import './RentaMensual.css';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import HeaderRentaMensual from './HeaderRentaMensual';
import Infogeneral from './InfoGeneral';
import DetalleDeclaracion from './DetalleDeclaracion/DetalleDeclaracion';
import DeterminacionDeuda from './DeterminacionD/DeterminacionDeuda';


export default function RentaMensual() {

    const [totalAmount, setTotalAmount] = useState(0);
    function resizeScreenHeader() {
        var screenWidth = window.innerWidth;
        var optionsWithoutFunctions = document.querySelector('.options-without-functions');
        var spacesDelete = document.querySelector(".delete-space");

        if (screenWidth <= 1668) {
            optionsWithoutFunctions.style.display = 'none';
            if (spacesDelete) {
                spacesDelete.remove();
            }
        } else {
            optionsWithoutFunctions.style.display = 'block';
        }
    }
    
    useEffect(() => {
        setInterval(resizeScreenHeader, 10);
    })

    return (
        <section class="home-section">
            <div class="sticky-header">
                <div className='d-flex'>
                    <div className='div-botones'>
                        <div className='flex-column p-4 w-100 options-without-functions'>
                            <span className='span-header-sticky pt-3 pb-3 ps-5 pe-4 ms-1 me-4 text-black test-arrow'>
                                Seleccione
                            </span>
                            <span className='span-header-sticky-active pt-3 pb-3 ps-5 pe-4 ms-1 me-4 text-white test-arrow-active'>
                                Complete
                            </span>
                            <span className='span-header-sticky pt-3 pb-3 ps-5 pe-4 ms-1 me-4 text-black test-arrow'>
                                Presente/Pague
                            </span>
                            <span className='span-header-sticky pt-3 pb-3 ps-5 pe-4 ms-1 me-4 text-black test-arrow'>
                                Constancia
                            </span>
                            <span className='pt-3 pb-3 ps-5 pe-5 ms-1'></span>
                            <span className='pt-3 pb-3 ps-5 pe-5 ms-1'></span>
                            <span className='pt-3 pb-3 ps-5 pe-5 ms-1'></span>
                        </div>
                        <div className='flex-column p-3 w-100'>
                            <span className='pt-3 pb-3 ps-5 pe-5 ms-1 delete-space '></span>
                            <span className='pt-3 pb-3 ps-5 pe-5 ms-1 delete-space '></span>
                            <span className='pt-3 pb-3 ps-5 pe-5 ms-1 delete-space '></span>
                            <span className='pt-3 pb-3 ps-5 pe-5 ms-5'>
                                Importe total a pagar
                                <span className='ms-1 span-bold zero-value-span'>
                                    <span className="me-1">s/.</span>
                                    <span className="me-1">{totalAmount.toFixed(2)}</span>
                                </span>
                            </span>
                            <span className="pt-3 pb-3 pe-5">
                                <i class="fas fa-question-circle fa-2x" style={{ color: 'gray' }}></i>
                            </span>
                            <span className='pt-3 pb-3'>
                                <i className="fas fa-globe-americas fa-2x" style={{ color: 'black' }}></i>
                            </span>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center align-items-center w-50'>
                        <button className="btn" style={{ backgroundColor: '#98373d', color: 'white' }}>
                            Ayuda General
                            <i className="fa-sharp fa-solid fa-caret-down arrow-left" style={{ color: 'white', marginInlineStart: '6px' }}></i>
                        </button>
                    </div>
                </div>
            </div>
            <HeaderRentaMensual />
            <Routes>
                <Route path='/infoGeneral' element={<Infogeneral />} />
                <Route path='/determinacionDeuda/*' element={<DeterminacionDeuda setTotalAmount={setTotalAmount} />} />
                <Route path='/detalleDeclaracion/*' element={<DetalleDeclaracion />} />
            </Routes>
        </section>
    )
}
