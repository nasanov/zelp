import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import sessionReducer from './session'
import businessesReducer from './businesses'
import reviewsReducer from './reviews'

const rootReducer = combineReducers({
	session: sessionReducer,
	business: businessesReducer,
	reviews: reviewsReducer,
})

// enhancer vaiable will be set to different store enhancers depending on if the Node environment is in development or production
let enhancer;

// in production engancer sohuld only apply thunk,
// in dev env logger and redux dev tools also compose enhancer
if (process.env.NODE_ENV === 'production') {
	enhancer = applyMiddleware(thunk);
} else {
	const logger = require('redux-logger').default;
	const composeEnhancer =
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	enhancer = composeEnhancer(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
	return createStore(rootReducer, preloadedState, enhancer)
}

export default configureStore
