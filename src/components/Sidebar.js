import './Sidebar.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom'

export default function Sidebar() {

  const [showMenu, setShowMenu] = useState(false);
  const [expandA, setExpandA] = useState(false);
  const [expandB, setExpandB] = useState(false);
  const [expandC, setExpandC] = useState(false);
  const [expandD, setExpandD] = useState(false);
  const [expandE, setExpandE] = useState(false);
  const [expandF, setExpandF] = useState(false);

  // Función para alternar la visibilidad del submenú
  const toggleSubMenu = () => {
    setShowMenu(!showMenu);
  };

  // Funciones para alternar la visibilidad de los submenús expandA, expandB, expandC, expandD, expandE
  const toggleExpandA = () => {
    setExpandA(!expandA);
  };

  const toggleExpandB = () => {
    setExpandB(!expandB);
  };

  const toggleExpandC = () => {
    setExpandC(!expandC);
  };

  const toggleExpandD = () => {
    setExpandD(!expandD);
  };

  const toggleExpandE = () => {
    setExpandE(!expandE);
  };

  const toggleExpandF = () => {
    setExpandF(!expandF);
  };

  const clearLocalStorageValues = () => {
    const variables = [
      '304',
      '145',
      '140',
      'Regimen',
      '101',
      'Suma_1',
      'radioSeleccionado',
      '188',
      'TasaPropia',
      'selectedDate',
      '312',
      '100',
      '681',
      '324',
      '302',
      '301',
      '108',
      '682',
      '179',
      '184',
      '107',
      '307',
      'totalAmount',
      '171',
      '189'
    ];
  
    variables.forEach((variable) => {
      if (variable === 'radioSeleccionado') {
        localStorage.setItem(variable, 'false');
      } else {
        localStorage.removeItem(variable);
      }
    });

    window.location.href = '/';

  }

  return (
    <div className="sidebar">
      <div className='head-sidebar'>
        <i class="fa-solid fa-house"></i>
        <span onClick={clearLocalStorageValues} >Ir al inicio</span>
      </div>
      <div className="logo-details">
        <span className="logo_name font-bold-personal" >MIS DECLARACIONES Y PAGOS</span>
      </div>
      <ul className="nav-links">
        <li className={`declara ${expandF ? 'showMenu' : ''}`}>
          <div className="icon-link icon-link-presentacion-pago" onClick={toggleExpandF}>
            <Link className='' to={'#'}>
              <i className="fa-solid fa-caret-right"></i>
              <span className="link_name_special">Presentacion y Pago</span>
            </Link>
          </div>
          <ul className="sub-menu">
            <li>
              <Link className='link_name' to={'/'}>Proximamente</Link>
            </li>
            <li>
              <Link className='link_name' to={'/'}>Proximamente</Link>
            </li>
            <li>
              <Link className='link_name' to={'/'}>Proximamente</Link>
            </li>
          </ul>
        </li>
        <li className={`declara ${showMenu ? 'showMenu' : ''}`}>
          <div className="icon-link" onClick={toggleSubMenu}>
            <Link className='' to={'#'}>
              <i className="fa-solid fa-caret-right"></i>
              <span className="link_name_special">Declara Fácil</span>
            </Link>
          </div>
          <ul className="sub-menu">
            <li>
              <Link className='link_name' to={'/'}>Proximamente</Link>
            </li>
            <li>
              <Link className='link_name' to={'/'}>Proximamente</Link>
            </li>
            <li>
              <Link className='link_name' to={'/'}>Proximamente</Link>
            </li>
          </ul>
        </li>

        <li className='link_blue'>
          <Link className='' to={'/621/infoGeneral'}>
            <i className=""></i>
            <span className="link_name">IGV Renta Mensual - 621</span>
          </Link>
        </li>

        <li className='link_blue'>
          <Link className='' to={'/'}>
            <i className=""></i>
            <span className="link_name">Agentes de Retención<br /> IGV -626</span>
          </Link>
        </li>

        <li className='link_blue'>
          <Link className='' to={'/'}>
            <i className=""></i>
            <span className="link_name">Agentes de Percepción<br /> IGV Hidrocarburos - 633</span>
          </Link>
        </li>
        <li className='link_blue'>
          <Link className='' to={'/'}>
            <i className=""></i>
            <span className="link_name">Agentes de Percepción<br /> IGV Ventas internas -<br /> 697</span>
          </Link>
        </li>

        <li className={`boletas ${expandE ? 'showMenu' : ''}`}>
          <div className="icon-link" onClick={toggleExpandE}>
            <Link className='' to={'#'}>
              <i className="fa-solid fa-caret-right"></i>
              <span className="link_name_special">Presentacion PDT</span>
            </Link>
          </div>
          <ul className="sub-menu">
            <li>
              <Link className='link_name_special' to={'/'}>Proximamente</Link>
            </li>
          </ul>
        </li>

        <li className={`declara ${expandA ? 'showMenu' : ''}`}>
          <div className="icon-link" onClick={toggleExpandA}>
            <i className="fa-solid fa-caret-right"></i>
            <Link className='' to={'#'}>
              <span className="link_name_special fix-declaracion">
                Pago y presentacion de otras declaraciones
              </span>
            </Link>
          </div>
          <ul className="sub-menu">
            <li>
              <Link className='link_name_special' to={'/'}>Proximamente</Link>
            </li>
          </ul>
        </li>

        <li className={`boletas ${expandB ? 'showMenu' : ''}`}>
          <div className="icon-link" onClick={toggleExpandB}>
            <Link className='' to={'#'}>
              <i className="fa-solid fa-caret-right"></i>
              <span className="link_name_special">Boletas de Pago</span>
            </Link>
          </div>
          <ul className="sub-menu">
            <li>
              <Link className='link_name_special' to={'/'}>Proximamente</Link>
            </li>
          </ul>
        </li>

        <li className={`aduanas ${expandC ? 'showMenu' : ''}`}>
          <div className="icon-link" onClick={toggleExpandC}>
            <Link className='' to={'#'}>
              <i className="fa-solid fa-caret-right"></i>
              <span className="link_name_special">Pago de Aduanas</span>
            </Link>
          </div>
          <ul className="sub-menu">
            <li>
              <Link className='link_name_special' to={'/'}>Proximamente</Link>
            </li>
          </ul>
        </li>
        <li className={`anuales ${expandD ? 'showMenu' : ''}`}>
          <div className="icon-link" onClick={toggleExpandD}>
            <Link className='' to={'#'}>
              <i className="fa-solid fa-caret-right"></i>
              <span className="link_name_special">Declaraciones Anuales</span>
            </Link>
          </div>
          <ul className="sub-menu">
            <li>
              <Link className='link_name_special' to={'/'}>Proximamente</Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}
