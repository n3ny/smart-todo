import { createStore, applyMiddleware, compose } from 'redux';
import reduxSaga from 'redux-saga';
import rootSaga from '../sagas';
import rootReducers from '../reducers'

const sagaMiddelware = reduxSaga();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(rootReducers, composeEnhancers(applyMiddleware(sagaMiddelware)))
    sagaMiddelware.run(rootSaga)
    return store
}

