import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import GetStart from './pages/Start';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={<Home/>} 
        />
        <Route 
          path="/docs/install" 
          element={<GetStart/>} 
        />
        <Route 
          path="*" 
          element={<NotFound/>} 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
