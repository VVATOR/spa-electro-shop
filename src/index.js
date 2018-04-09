import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import combineReducers from './reducers'
//import {syncHistoryWithStore} from 'react-router-redux';

//const store = createStore(combineReducers);
const store = createStore(combineReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
//const history = syncHistoryWithStore(browserHistory,store);




ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider> 

    , document.getElementById('root'));
registerServiceWorker();

