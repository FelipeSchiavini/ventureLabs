import React from 'react';
import ReactDOM from 'react-dom';
import { StateMachineProvider } from "little-state-machine";


import App from './App';
import './index.css';


ReactDOM.render(
  <StateMachineProvider>
    <App />
  </StateMachineProvider>,
  document.getElementById('root')
);

