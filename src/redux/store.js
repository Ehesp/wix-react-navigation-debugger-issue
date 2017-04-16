import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

let middleware = [thunk];

if (__DEV__) {
    const { createLogger } = require('redux-logger');

    const logger = createLogger({ collapsed: true });
    middleware = [...middleware, logger];
} else {
    middleware = [...middleware];
}

export default function (initialState) {
    return createStore(
        reducers,
        initialState,
        applyMiddleware(...middleware),
    );
}
