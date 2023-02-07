import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/css/styles.css';
import {AppContent} from './assets/css/styles';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppContent>
      <App />
    </AppContent>
  </React.StrictMode>
);

