// =========================================== Imports  ===========================================

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import './index.scss';
import './app.scss'

import { BrowserRouter } from 'react-router-dom';

// ========================================== Functions  ==========================================

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, 
  document.getElementById('root')
);
