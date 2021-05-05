import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import RightSidebar from './RightSidebar';

ReactDOM.render(
  <React.StrictMode>
    <RightSidebar />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();