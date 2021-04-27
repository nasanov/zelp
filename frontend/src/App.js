import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from './components/SignupFormPage';
import HomePage from './components/HomePage';
import * as sessionActions from './store/session';
import * as businessesActions from './store/businesses';
// import Navigation from './components/Navigation';
import Businesses from './components/Businesses';
import BusinessDetails from './components/BusinessDetails';
// import Header from './components/HomePage/Header';

function App() {
	const businesses = useSelector(state => state.business);
	const topBusinesses = useSelector(state => state.topBusinesses);
	// console.log('businesses', businesses);

	const dispatch = useDispatch();
	const [isLoaded, setIsLoaded] = useState(false);
	// console.log(isLoaded)
	useEffect(() => {
		dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
	}, [dispatch]);

	useEffect(() => {
		dispatch(businessesActions.fetchBusinesses());
	}, [dispatch]);

	// console.log('businesses', businesses);
	return (
		<>
			{/* <Navigation isLoaded={isLoaded} /> */}
			{/* {window.location.pathname === '/' ? <Header /> : <Navigation isLoaded={isLoaded} />} */}
			{isLoaded && (
				<>
					<Switch>
						<Route path="/" exact>
							<HomePage businesses={topBusinesses} />
						</Route>
						<Route exact path="/businesses">
							<Businesses businesses={businesses} />
						</Route>
						<Route exact path="/businesses/:id">
							<BusinessDetails businesses={businesses} />
						</Route>
						<Route path="/login" exact>
							<LoginFormPage />
						</Route>
						<Route path="/signup" exact>
							<SignupFormPage />
						</Route>
						{/* <Route>
							<NotFound />
						</Route> */}
					</Switch>
				</>
			)}
		</>
	);
}

export default App;
