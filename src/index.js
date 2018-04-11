import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import combineReducers from './js/reducers';

const store = createStore(combineReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



/*
ReactDOM.render(
   <Provider store={store}>
       <App />
   </Provider>

   , document.getElementById('root'));
  // , document.getElementsByTagName('title')[0]);

   ReactDOM.render(
       <p>lol</p>
       //, document.getElementById('root'));
       , document.getElementsByTagName('title')[0]);
       registerServiceWorker();
   

*/


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
 
    , document.getElementById('root'));