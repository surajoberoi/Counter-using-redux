import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux'
import reducer from './reducer/reducer';
import {Provider} from 'react-redux'


const Store = createStore(reducer);

ReactDOM.render(<Provider store={Store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker(); 
