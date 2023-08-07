import React, { useEffect, useState } from 'react'

export default function SubVentas() {

  const [value100, setValue100] = useState('');
  const [value101, setValue101] = useState('');
  const [value106, setValue106] = useState('');
  const [value112, setValue112] = useState('');

  const handleChange1 = (event) => {
    const value = event.target.value;
    setValue100(value);
    localStorage.setItem('100', value);

    const multiplicacion = value ? parseFloat(value) * localStorage.getItem("TasaPropia") : '';
    setValue101(multiplicacion ? Math.round(multiplicacion) : '');
    localStorage.setItem('101', multiplicacion ? Math.round(multiplicacion) : '');
  };

  const handleChange106 = (event) => {
    const value = event.target.value;
    setValue106(value)
    localStorage.setItem('106', value);
  }

  const handleChange112 = (event) => {
    const value = event.target.value;
    setValue112(value)
    localStorage.setItem('112', value);
  }



  useEffect(() => {
    const storedValue = localStorage.getItem('100');
    if (storedValue) {
      setValue100(storedValue);
    }

    const storedValue101 = localStorage.getItem('101');
    if (storedValue101) {
      setValue101(storedValue101);
    }

    const storedValue106 = localStorage.getItem('106');
    if (storedValue106) {
      setValue106(storedValue106);
    }

    const storedValue112 = localStorage.getItem('112');
    if (storedValue112) {
      setValue112(storedValue112);
    }

  }, []);



  return (
    <>
      <div class="group-box ms-5 me-5 mt-4">
        <p>Ventas Netas Gravadas</p>
        <div className="input-group w-25 ms-5">
          <span className="input-group-text ms-5">100</span>
          <input type="text" className="form-control input-to-right"
            value={value100}
            onChange={handleChange1} />
          <span className="input-group-text">
            <i className="fas fa-question-circle fa-1x" style={{ color: 'black' }}></i>
          </span>
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text">101</span>
          <input type="text" class="form-control input-blue-custom input-101" value={value101} readOnly />
          <span class="input-group-text">
            <i class="fas fa-question-circle fa-1x" style={{ color: 'black' }}></i>
          </span>
        </div>
      </div>
      <div class="border-top ms-5 me-5"></div>
      <div class="group-box ms-5 me-5 mt-4">
        <p>Descuentos concedidos y/o Dev de ventas</p>
        <div class="input-group w-25 ms-5">
          <span class="input-group-text ms-5">102</span>
          <input type="text" class="form-control input-disable-custom" />
          <span class="input-group-text">
            <i class="fas fa-question-circle fa-1x" style={{ color: 'black' }}></i>
          </span>
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text">103</span>
          <input type="text" class="form-control input-blue-custom" />
          <span class="input-group-text">
            <i class="fas fa-question-circle fa-1x" style={{ color: 'black' }}></i>
          </span>
        </div>
      </div>
      <div class="border-top ms-5 me-5"></div>
      <div class="group-box ms-5 me-5 mt-4">
        <p>Exportaciones facturadas en el periodo (bienes y servicios) </p>
        <div class="input-group w-25 ms-5">
          <span class="input-group-text ms-5">106</span>
          <input type="text" class="form-control" value={value106} onChange={handleChange106} />
          <span class="input-group-text">
            <i class="fas fa-question-circle fa-1x" style={{ color: 'black' }}></i>
          </span>
        </div>
      </div>
      <div class="border-top ms-5 me-5 mt-3"></div>
      <div class="group-box ms-5 me-5 mt-4">
        <p>Exportaciones embarcadas en el periodo (incluye exportación de servicios)</p>
        <div class="input-group w-25 ms-5">
          <span class="input-group-text ms-5">127</span>
          <input type="text" class="form-control input-green-custom" />
          <span class="input-group-text">
            <i class="fas fa-question-circle fa-1x" style={{ color: 'black' }}></i>
          </span>
        </div>
      </div>
      <div class="border-top ms-5 me-5 mt-3"></div>
      <div class="group-box ms-5 me-5 mt-4">
        <p>Otras ventas (inc. ii), num 6.2 Art. 6 del Reglam</p>
        <div class="input-group w-25 ms-5">
          <span class="input-group-text ms-5">112</span>
          <input type="text" class="form-control" value={value112} onChange={handleChange112}/>
          <span class="input-group-text">
            <i class="fas fa-question-circle fa-1x" style={{ color: 'black' }}></i>
          </span>
        </div>
      </div>
      <div class="border-top ms-5 me-5 mt-3"></div>
      <div class="group-box ms-5 me-5 mt-4">
        <div class="d-flex justify-content-end align-items-start">
          <p class="mb-0">TOTAL VENTAS</p>
        </div>
        <div class="input-group mb-3 me-5 mt-2">
          <span class="input-group-text">131</span>
          <input type="text" class="form-control input-to-right" value={value101} disabled />
          <span class="input-group-text">
            <i class="fas fa-question-circle fa-1x" style={{ color: 'black' }}></i>
          </span>
        </div>
      </div>
      <br /><br /><br /><br /><br />
    </>
  )
}
