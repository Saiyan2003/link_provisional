import React, { useEffect, useState } from 'react'

export default function SubCompras() {

  const [value107, setValue107] = useState('');
  const [value108, setValue108] = useState('');

  const handleChange1 = (event) => {

    const value = event.target.value;
    setValue107(value);
    localStorage.setItem('107', value);

    const multiplicacion = value ? parseFloat(value) * localStorage.getItem("TasaPropia") : '';
    setValue108(multiplicacion ? Math.round(multiplicacion) : '');
    localStorage.setItem('108', multiplicacion ? Math.round(multiplicacion) : '');

  };

  useEffect(() =>{

    const storedValue = localStorage.getItem('107');
    if (storedValue) {
      setValue107(storedValue);
    }

    const storedValue2 = localStorage.getItem('108');
    if (storedValue2) {
      setValue108(storedValue2);
    }


  },[]);


  return (
    <>
      <div class="group-box ms-5 me-5 mt-4">
        <p>Compras Netas Destinadas a vtas. gravadas</p>
        <div class="input-group w-25 ms-5">
          <span class="input-group-text ms-5">107</span>
          <input type="text" className="form-control input-to-right" onChange={handleChange1} value={value107}/>
          <span class="input-group-text">
            <i class="fas fa-question-circle fa-1x" style={{ color: 'black' }}></i>
          </span>
        </div>
      </div>
      <div class="group-box ms-5 me-5">
        <div class="input-group mb-3 me-5">
          <span class="input-group-text">108</span>
          <input type="text" class="form-control input-blue-custom" value={value108}/>
          <span class="input-group-text">
            <i class="fas fa-question-circle fa-1x" style={{ color: 'black' }}></i>
          </span>
        </div>
      </div>
      <div class="border-top ms-5 me-5 mt-3"></div>
      <div class="group-box ms-5 me-5 mt-4">
        <p>Compras Netas tasa 10% Ley N 31556 (8% IGV + 2% IPM) destinadas a Vtas Gravadas</p>
        <div class="input-group w-25 ms-5">
          <span class="input-group-text ms-5 ">156</span>
          <input type="text" class="form-control input-disable-custom" />
          <span class="input-group-text">
            <i class="fas fa-question-circle fa-1x" style={{ color: 'black' }}></i>
          </span>
        </div>
      </div>
      <div class="group-box ms-5 me-5">
        <div class="input-group mb-3 me-5">
          <span class="input-group-text">157</span>
          <input type="text" class="form-control input-blue-custom" />
          <span class="input-group-text">
            <i class="fas fa-question-circle fa-1x" style={{ color: 'black' }}></i>
          </span>
        </div>
      </div>
      <div class="border-top ms-5 me-5 mt-3"></div>
      <div class="group-box ms-5 me-5 mt-4">
        <p>Compras Netas Destinadas a vtas. no grav</p>
        <div class="input-group w-25 ms-5">
          <span class="input-group-text ms-5">113</span>
          <input type="text" class="form-control input-disable-custom" />
          <span class="input-group-text">
            <i class="fas fa-question-circle fa-1x" style={{ color: 'black' }}></i>
          </span>
        </div>
      </div>
      <div class="border-top ms-5 me-5 mt-3"></div>
      <div class="group-box ms-5 me-5 mt-4">
        <p>Compras Netas Destinadas a vtas. grav - Import</p>
        <div class="input-group w-25 ms-5">
          <span class="input-group-text ms-5">114</span>
          <input type="text" class="form-control input-disable-custom" />
          <span class="input-group-text">
            <i class="fas fa-question-circle fa-1x" style={{ color: 'black' }}></i>
          </span>
        </div>
        <div class="input-group mb-3 me-5">
          <span class="input-group-text">115</span>
          <input type="text" class="form-control input-blue-custom" />
          <span class="input-group-text">
            <i class="fas fa-question-circle fa-1x" style={{ color: 'black' }}></i>
          </span>
        </div>
      </div>
      <div class="border-top ms-5 me-5 mt-3"></div>
      <div class="group-box ms-5 me-5 mt-4">
        <p>Compras Netas Destinadas a vtas. no grav</p>
        <div class="input-group w-25 ms-5">
          <span class="input-group-text ms-5">120</span>
          <input type="text" class="form-control input-disable-custom" />
          <span class="input-group-text">
            <i class="fas fa-question-circle fa-1x" style={{ color: 'black' }}></i>
          </span>
        </div>
      </div>
      <div class="border-top ms-5 me-5 mt-3"></div>
      <div class="group-box ms-5 me-5 mt-4">
        <p>Exportaciones embarcadas en el periodo (incluye exportación de servicios)</p>
        <div class="input-group w-25 ms-5">
          <span class="input-group-text ms-5">122</span>
          <input type="text" class="form-control input-green-custom" />
          <span class="input-group-text">
            <i class="fas fa-question-circle fa-1x" style={{ color: 'black' }}></i>
          </span>
        </div>
      </div>
      <div class="border-top ms-5 me-5 mt-3"></div>
      <div class="group-box ms-5 me-5 mt-4">
        <div class="d-flex justify-content-end align-items-start">
          <p class="mb-0">TOTAL COMPRAS</p>
        </div>
        <div class="input-group mb-3 me-5 mt-2">
          <span class="input-group-text">178</span>
          <input type="text" class="form-control input-to-right" disabled value={value108}/>
          <span class="input-group-text">
            <i class="fas fa-question-circle fa-1x" style={{ color: 'black' }}></i>
          </span>
        </div>
      </div>
      <div class="border-top ms-5 me-5 mt-3"></div>
      <br/><br/><br/><br/>
    </>
  )
}
