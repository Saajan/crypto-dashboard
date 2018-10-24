import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';

import createSagaMiddleware from 'redux-saga';
import saga from './sagas';

import rootReducer from './reducers/index';

const sagaMiddleware = createSagaMiddleware();


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(saga);

export default store;