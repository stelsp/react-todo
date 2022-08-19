import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import DataProvider from './context/context';

import './lib/sass/global.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  // <React.StrictMode>
  // </React.StrictMode>
  <DataProvider>
    <App />
  </DataProvider>
);
