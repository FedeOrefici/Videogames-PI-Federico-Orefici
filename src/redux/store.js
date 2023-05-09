import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {reducer} from './reducer';

//LINEA PARA CONECTAR CON LA EXTENSION REDUX DEVTOOLS
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunk))
    //esta linea es para hacer peticiones a un server
);

export default store;
