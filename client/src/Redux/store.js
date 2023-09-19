import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './reducer';


const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // esta linea es para conectar don la extension

const store = createStore(
    rootReducer,
    composeEnhacer(applyMiddleware(thunk))); // Esta linea nos permite hacer peticiones a un servidor

export default store;