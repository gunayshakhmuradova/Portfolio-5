import React from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App'; 

const root = document.getElementById('root');
const rootRender = createRoot(root);
rootRender.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
