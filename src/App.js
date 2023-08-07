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
    localStorage.clear();
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
