import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Start from './pages/Start';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Button from './pages/Button';
import TopBanner from './pages/TopBanner';
import PromoRibbion from './pages/PromotionRibbion';
import Announcement from './pages/Announcement';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/docs/install" element={<Start />} />
        <Route path="/docs/components/button" element={<Button />} />
        <Route path="/docs/components/topbanner" element={<TopBanner />} />
        <Route path="/docs/components/promoribbion" element={<PromoRibbion />} />
        <Route path="/docs/components/announcement" element={<Announcement />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
