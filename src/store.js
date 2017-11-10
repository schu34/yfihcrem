import axios 							from 'axios'
import { createStore, applyMiddleware } from 'redux';
import axiosMiddleware 					from 'redux-axios-middleware'
import reducers 						from './reducers/index.js';

const client = axios.create({
	responseType: 'json',
})

const createStoreWithMiddleware = applyMiddleware(axiosMiddleware(client))(createStore);

let store = createStoreWithMiddleware(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;