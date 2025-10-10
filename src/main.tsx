import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

// Páginas
import { Landing } from './pages/Landing';
import { Plans } from './pages/Plans';
import { Checkout } from './pages/Checkout';
import { Processing } from './pages/Processing';
import { Confirm } from './pages/Confirm';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/processing" element={<Processing />} />
        <Route path="/confirm" element={<Confirm />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
