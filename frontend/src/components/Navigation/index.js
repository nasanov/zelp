import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
// import ProfileButton from './ProfileButton';
// import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

function Navigation({ isLoaded }) {
	const sessionUser = useSelector(state => state.session.user);
	const dispatch = useDispatch();
	const logout = e => {
		e.preventDefault();
		dispatch(sessionActions.logout());
	};

	let sessionLinks;
	if (sessionUser) {
		sessionLinks = (
			<li>
					<NavLink to="/" onClick={logout} className="home-signup-btn">
						Log out
					</NavLink>
			</li>
		);
	} else {
		sessionLinks = (
			<>
				<li>
					<NavLink to="/login">Log In</NavLink>
				</li>
				<li>
					<NavLink to="/signup">Sign Up</NavLink>
				</li>
			</>
		);
	}

	return (
		<nav>
			<ul className="menu">
				<li>
					<NavLink exact to="/">
						Home
					</NavLink>
				</li>
				{isLoaded && sessionLinks}
			</ul>

		</nav>
	);
}

export default Navigation;
