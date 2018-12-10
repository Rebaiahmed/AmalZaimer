import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import registerServiceWorker from './registerServiceWorker';
import { initializeFirebase } from './push-notification';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
//initializeFirebase(); 
