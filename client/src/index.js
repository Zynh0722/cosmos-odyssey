import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/css/index.css';
import App from './containers/App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);