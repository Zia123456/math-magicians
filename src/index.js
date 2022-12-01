import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Calculator from './components/Calculator';

const calculatorContainer = ReactDOM.createRoot(
  document.getElementById('calculator-container'),
);

calculatorContainer.render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>,
);
