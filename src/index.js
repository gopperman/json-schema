import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import groupReducer from './reducers/groupReducer';
import './index.css';
import App from './App';
import schema from './data/schema.json'
import { applySchemaTransformations } from './utils/schemaUtils.js'

const store = createStore(groupReducer, {
	fieldGroups: applySchemaTransformations(schema),
	activeField: 3976,
	activeGroup: 0
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));

registerServiceWorker();

