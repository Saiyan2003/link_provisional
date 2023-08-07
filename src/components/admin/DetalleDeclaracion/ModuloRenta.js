import React, { useEffect, useState } from 'react'
import './ModuloRenta.css'

export default function ModuloRenta() {

  const [value301, setValue301] = useState('');
  const [value312, setValue312] = useState('');


  const handleChange1 = (event) => {
    const value = event.target.value;
    setValue301(value);
    localStorage.setItem('301', value); 

    const multiplicacion = value ? parseFloat(value) * localStorage.getItem("Regimen"): '';
    setValue312(multiplicacion ? Math.round(multiplicacion) : '');
    localStorage.setItem('312', multiplicacion ? Math.round(multiplicacion) : '');
  };

  useEffect(() => {

    const storedValue = localStorage.getItem('301');
    if (storedValue) {
      setValue301(storedValue);
      setValue312(storedValue ? parseFloat(storedValue) * localStorage.getItem("Regimen"): '');
    }

  },[]);

  return (
    <>
      <div class="group-box ms-5 me-5 mt-4">
        <fieldset>
          <legend> </legend>
          <div class="group-box-content">
            <p>¿Cuenta con una Resolucion aprobada y notificada de suspensión de pagos o cuenta?</p>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="rptaSSNN"
                value="option5" disabled />
              <label class="form-check-label" for="exampleRadios2">
                Si
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="rptaSSNN"
                value="option5" disabled checked />
              <label class="form-check-label" for="exampleRadios2">
                No
              </label>
            </div>
          </div>
        </fieldset>
      </div>
      <div class="group-box ms-5 me-5 mt-5">
        <fieldset>
          <legend> </legend>
          <div class="group-box-content">
            <strong>Núm. de Res Int:</strong>
            <div class="input-group mb-3">
              <input type="text" class="form-control input-disable-custom-2" />
              <span class="input-group-text">
                <i class="fa-solid fa-circle-info"></i>
              </span>
            </div>
          </div>
          <div class="group-box-content">
            <strong>Fecha Notificación:</strong>
            <div class="input-group mb-3">
              <input type="text" class="form-control input-disable-custom-2-left" placeholder="DD/MM/YYYY" />
              <span class="input-group-text">
                <i class="fa-solid fa-circle-info"></i>
              </span>
            </div>
          </div>
          <div class="group-box-content">
            <strong>Coeficiente Sunat:</strong>
            <div class="input-group mb-3">
              <input type="text" class="form-control input-disable-custom-2" />
              <span class="input-group-text">
                <i class="fa-solid fa-circle-info"></i>
              </span>
            </div>
          </div>
        </fieldset>
      </div>

      <div class="group-box ms-5 me-5 mt-4">
        <fieldset>
          <legend> Estado de Ganancia y Pérdida</legend>
          <div class="group-box-content">
            <p>
              <strong>¿ Ha presentado un Formulario PDF 625 </strong>
              con estado de Ganancias y Pérdidas actualizada al
              <strong> 30 de abril </strong>
              de este ejercicio?
            </p>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="rptaSN"
                value="option2" disabled />
              <label class="form-check-label" for="exampleRadios2">
                Si
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="rptaSN"
                value="option2" disabled checked />
              <label class="form-check-label" for="exampleRadios2">
                No
              </label>
            </div>
          </div>
        </fieldset>
      </div>

      <div class="group-box ms-5 me-5 mt-4">
        <p>Coeficiente - Art 85° inc a</p>
        <div class="input-group mb-3">
          <span class="input-group-text">380</span>
          <input type="text" class="form-control input-to-right" placeholder='0.0000' disabled />
          <span class="input-group-text">
            <i class="fas fa-question-circle fa-1x" style={{ color: 'black' }}></i>
          </span>
        </div>
      </div>
      <div class="border-top ms-5 me-5"></div>
      <div class="group-box ms-5 me-5 mt-4">
        <p>Porcentaje - Art 85° inc b</p>
        <div class="input-group mb-3">
          <span class="input-group-text">315</span>
          <input type="text" class="form-control input-disable-custom-2" value={localStorage.getItem("Regimen") * 100}/>
          <span class="input-group-text">
            <i class="fas fa-question-circle fa-1x" style={{ color: 'black' }}></i>
          </span>
        </div>
      </div>

      <div class="border-top ms-5 me-5"></div>
      <div class="group-box ms-5 me-5 mt-4">
        <p>Ingresos Netos</p>
        <div class="input-group">
          <span class="input-group-text">301</span>
          <input type="text" class="form-control input-to-right" onChange={handleChange1} value={value301} />
          <span class="input-group-text">
            <i class="fas fa-question-circle fa-1x" style={{ color: 'black' }}></i>
          </span>
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text">312</span>
          <input type="text" class="form-control input-disable-custom-2" value={value312} />
          <span class="input-group-text">
            <i class="fas fa-question-circle fa-1x" style={{ color: 'black' }}></i>
          </span>
        </div>
      </div>
      <br/><br/><br/>
    </>
  )
}
