import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import * as themes from './components/theme/schema.json';
import { setToLS } from './utils/storage';

// This imports bootstrap
import 'bootstrap/dist/css/bootstrap.css';

const Index = () => {
  setToLS('all-themes', themes.default);
  return(
    <App/>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Index />
    
  </React.StrictMode>
);




