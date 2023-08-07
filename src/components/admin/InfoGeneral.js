import './InfoGeneral.css';
import React, { useEffect, useState } from 'react';


export default function InfoGeneral() {

  const [radioSeleccionado, setRadioSeleccionado] = useState(false);
  const [tasaPropia, setTasaPropia] = useState(parseFloat(localStorage.getItem('TasaPropia')) || 0);


  const handleCheckboxChange = (event) => {
    if (event.target.checked) {
      setTasaPropia(0.18);
      localStorage.setItem('TasaPropia', '0.18');
    } else {
      setTasaPropia(0);
      localStorage.setItem('TasaPropia', '');
    }
  };

  const [regimen, setRegimen] = useState(
    localStorage.getItem("Regimen") || "0"
  );

  const handleRadioChange = (event) => {
    const selectedValue = event.target.value;
    setRegimen(selectedValue);
    localStorage.setItem("Regimen", selectedValue);

    let tipoRegimen = '';

    switch (selectedValue) {
      case "0.015":
        tipoRegimen = "3031 - RENTA - REGIMEN GENERAL";
        break;
      case "0.0150":
        tipoRegimen = "3111 - RENTA - REGIMEN ESPECIAL";
        break;
      case "0.01":
        tipoRegimen = "3121 - RENTA - REGIMEN MYPE TRIBUTARIO";
        break;
      // Agrega más casos según sea necesario para otros tipos de régimen
      default:
        tipoRegimen = '';
        break;
    }

    localStorage.setItem("TIPOREGIMEN", tipoRegimen);
  };


  const handleRadioChangeOpen = (event) => {
    const value = event.target.checked;
    setRadioSeleccionado(value);
    localStorage.setItem('radioSeleccionado', value);
    console.log(value);
  };

  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    const storedDate = localStorage.getItem("selectedDate");
    if (storedDate) {
      setSelectedDate(storedDate);
    }

    const storedRegimen = localStorage.getItem("Regimen");
    if (storedRegimen) {
      setRegimen(storedRegimen);
    }

    const storedValue = localStorage.getItem('radioSeleccionado');
    if (storedValue) {
      setRadioSeleccionado(storedValue === 'true');
    }

  }, []);


  const handleDateChange = (event) => {
    const inputValue = event.target.value;
    const formattedValue = inputValue.replace(/[^0-9/]/g, ''); // Permitir solo números y "/"
    const dateParts = formattedValue.split('/'); // Dividir la cadena en partes (mes y año)
    let storedValue = '';

    if (dateParts.length === 2) {
      const [month, year] = dateParts;
      storedValue = `${year}${month}`; // Concatenar el año y el mes en el formato deseado
    }

    if (storedValue.length > 6) {
      return; // Evitar que se exceda la longitud de 6 caracteres
    }

    setSelectedDate(formattedValue);
    localStorage.setItem('selectedDate', storedValue);
  };




  return (
    <>
      <div className="group-box ms-5 me-5 mt-4">
        <fieldset>
          <legend>Periodo Tributario</legend>
          <div className="group-box-content">
            <p>Periodo:</p>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="mm/aaaa"
                value={selectedDate}
                onChange={handleDateChange}
              />
              <span className="input-group-text">
                <i className="fa-solid fa-circle-info"></i>
              </span>
            </div>
          </div>
        </fieldset>
      </div>
      <div class="group-box ms-5 me-5 mt-4">
        <fieldset>
          <legend>Tipo de Declaracion</legend>
          <div class="group-box-content">
            <p>Declaración:</p>
            <select class="form-select mb-3" aria-label="Rectificatoria" disabled>
              <option selected>Original</option>
            </select>
          </div>
        </fieldset>
      </div>
      <div class="group-box ms-5 me-5 mt-4">
        <fieldset>
          <legend>Tipo de Moneda</legend>
          <div class="group-box-content">
            <p>Moneda:</p>
            <select class="form-select mb-3" aria-label="Rectificatoria" disabled>
              <option selected>Soles</option>
            </select>
          </div>
        </fieldset>
      </div>
      <div class="alert alert-warning ms-5 me-5 mt-2">
        <span className='alert-special-1'>
          <span className='text-alert-special-1'>
            Sr. Contribuyente, seleccione el tributo o tributos a sustituir/rectificar.
          </span>
          <i class="fa-solid fa-check" ></i>
        </span>
      </div>

      <div class="group-box ms-5 me-5 mt-4">
        <fieldset>
          <div class="group-box-content">
            <p><strong>Impuesto general a las Ventas:</strong></p>
            <div class="form-check">
              <input
                className="form-check-input cuentaPropia"
                type="radio"
                name="radioImpuestoGeneral"
                id="exampleRadios1"
                value="option1"
                checked={radioSeleccionado}
                onChange={handleRadioChangeOpen}
              />
              <label class="form-check-label" for="exampleRadios1">
                IGV - Cuenta propia
              </label>
            </div>
            <div className={`igvMore ${radioSeleccionado ? 'open' : 'close'} ms-4`}>
              <div className="form-check">
                <input
                  className="form-check-input TasaPropia"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                  checked={tasaPropia === 0.18}
                  onChange={handleCheckboxChange}
                />
                <label className="form-check-label" htmlFor="defaultCheck1">
                  IGV - Cuenta propia tasa 18%
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck2"
                  disabled />
                <label className="form-check-label" for="defaultCheck2">
                  IGV Tasa Especial 10%
                </label>
              </div>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="radioImpuestoGeneral"
                id="exampleRadios2" value="option2" disabled />
              <label className="form-check-label" for="exampleRadios2">
                Con convenio de estabilidad
              </label>
            </div>
            <p className="mt-2"><strong>Impuesto a las Ventas al arroz Pilado:</strong></p>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="arroz" id="exampleRadios2"
                value="option2" disabled />
              <label className="form-check-label" for="exampleRadios2">
                IVAP
              </label>
            </div>
            <p><strong>Impuesto a la Renta/Regimen de Renta:</strong></p>
            <div>
              <div className="form-check">
                <input
                  className="form-check-input reg-general"
                  type="radio"
                  name="regimen"
                  id="regGeneral"
                  value="0.015"
                  checked={regimen === "0.015"}
                  onChange={handleRadioChange}
                />
                <label className="form-check-label" htmlFor="regGeneral">
                  Régimen General
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input reg-especial"
                  type="radio"
                  name="regimen"
                  id="regEspecial"
                  value="0.0150"
                  checked={regimen === "0.0150"}
                  onChange={handleRadioChange}
                />
                <label className="form-check-label" htmlFor="regEspecial">
                  Régimen Especial
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input reg-mype"
                  type="radio"
                  name="regimen"
                  id="regMype"
                  value="0.01"
                  checked={regimen === "0.01"}
                  onChange={handleRadioChange}
                />
                <label className="form-check-label" htmlFor="regMype">
                  Régimen Tributario MYPE
                </label>
              </div>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="regimen" id="exampleRadios2"
                value="option2" disabled />
              <label className="form-check-label" for="exampleRadios2">
                Régimen Amazonía
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="regimen" id="exampleRadios2"
                value="option2" disabled />
              <label className="form-check-label" for="exampleRadios2">
                Con convenio de Estabilidad - Pagos a cuenta de Renta
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="regimen" id="exampleRadios2"
                value="option2" disabled />
              <label className="form-check-label" for="exampleRadios2">
                Régimen Agrario - Ley 31110
              </label>
            </div>
          </div>
        </fieldset>
      </div>
      <div className="group-box ms-5 me-5 mt-4">
        <fieldset>
          <legend> Ventas no grav con IGV</legend>
          <div className="group-box-content">
            <p>¿Ha realizado ventas no gravadas con el IGV en los ultimos 12 meses?</p>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="rptaSN"
                value="option2" disabled />
              <label className="form-check-label" for="exampleRadios2">
                SI
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="rptaSN"
                value="option2" disabled checked />
              <label className="form-check-label" for="exampleRadios2">
                NO
              </label>
            </div>
          </div>
        </fieldset>
      </div>
      <br /><br /><br />
    </>
  )
}
