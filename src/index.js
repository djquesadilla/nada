import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Nada from './gameComponents/Nada';
import Music from './Music';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nada />
    <Music />
  </React.StrictMode>
);
