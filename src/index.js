import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { DataProvider } from './context'


ReactDOM.render(
  <DataProvider>
    <App />
  </DataProvider>
  , document.getElementById('root'));
