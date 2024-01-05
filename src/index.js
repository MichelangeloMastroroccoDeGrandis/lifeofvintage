import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'

import en from './lang/en.json'
import it from './lang/it.json'

i18next.init({
  interpolation: { escapeValue: false },
   lng: 'auto',
   fallbackLng: 'en',
  resources: {
   en: {
    global: en,
   },
   it: {
    global: it,
   },
  },
 })


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <I18nextProvider i18n={i18next}>
    <App />
  </I18nextProvider>
    

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
