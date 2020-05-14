import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import  AutopartsRouting from './auto/autopartroute';

ReactDOM.render(
  <React.StrictMode>
    <AutopartsRouting />
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();




    