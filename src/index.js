// ./src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import {createStore } from "redux";
import counterReducer from './reducers/counterReducer.js';
import App from './App';
import './index.css';

const store = createStore(counterReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// Now with the above setup, let's pass store down to App as a prop so it can access the Redux store
// Here we pass our newly created store to our App component as a prop.
ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
);
