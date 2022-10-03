//Import react library for building user interfaces
import React from 'react';
//import react-dom provides access to DOM-specific methods
import ReactDOM from 'react-dom/client';
//import App component
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

//render the app component 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


