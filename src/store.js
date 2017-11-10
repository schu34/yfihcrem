import axios 							from 'axios'
import { createStore, applyMiddleware } from 'redux';
import axiosMiddleware 					from 'redux-axios-middleware'
import reducers 						from './reducers/index.js';

const token = "85C4677E4CDA1B95917E7323F6596"
const client = axios.create({
	responseType: 'json',
	timeout: 20000,
	params:{
      	"token": token,
    },	
	
})

const createStoreWithMiddleware = applyMiddleware(axiosMiddleware(client))(createStore);

let store = createStoreWithMiddleware(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;