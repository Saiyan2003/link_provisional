import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Error from './components/Error';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Coming from './components/Coming';
import RentaMensual from './components/admin/RentaMensual';
import React from 'react';
import { useEffect } from 'react';
function App() {

  useEffect(() => {
    localStorage.setItem("TasaPropia", "");
    localStorage.setItem("Regimen", "");
    localStorage.setItem("100", "");
    localStorage.setItem("101", "");

    localStorage.setItem("107", "");
    localStorage.setItem("108", "");

    localStorage.setItem("301", "");
    localStorage.setItem("312", "");

    localStorage.setItem("140", "");
    localStorage.setItem("302", "");
    localStorage.setItem("304", "");
    localStorage.setItem("145", "");
    localStorage.setItem("184", "");

    localStorage.setItem("171", "");
    localStorage.setItem("179", "");
    localStorage.setItem("681", "");
    localStorage.setItem("682", "");

    localStorage.setItem("188","");
    localStorage.setItem("189", "");

  })

  return (
    <div className="App">
      <Router>
        <Header />
        <Sidebar />
        <Routes>
          <Route exact path='/' element={<Coming />} />
          <Route exact path='/621/*' element={<RentaMensual />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
