import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import List from './Pages/Lister/List';
import Rando from './Pages/Rando/Rando';
import Login from './Pages/Login/Login';
import Reservation from './Components/Reservation/Reservation';
import Register from './Pages/Register/Register';
import Propos from './Pages/A Propos/Propos';
import Aventures from './Pages/Aventures/Aventures';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Rondos" element={<List/>} />
        <Route path="/randos/feature/:id" element={<Rando/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/reservations" element={<Reservation/>} />
        <Route path="/propos" element={<Propos/>} />
        <Route path="/Aventures" element={<Aventures/>} />


        
      </Routes>
    </Router>
  );
}

export default App;
