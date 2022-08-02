import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Installation from './pages/Installation';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path='/install' element={<Installation />} />
        <Route path="*" element={ <NotFound/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
