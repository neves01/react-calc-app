import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Calculator from './components/Calculator';

ReactDOM.render(
  <React.StrictMode>
    <h1>Calculator</h1>
    <Calculator />
  </React.StrictMode>,
  document.getElementById('root')
);