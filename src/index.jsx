import 'raf/polyfill';
import React from 'react';
import { render } from 'react-dom';
import App from '../src/app';
import { BrowserRouter } from 'react-router-dom';

render(
  (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ), document.getElementById('root')
);
