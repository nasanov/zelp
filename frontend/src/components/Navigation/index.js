import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

function Navigation({ isLoaded }) {
	const sessionUser = useSelector(state => state.session.user);

	let sessionLinks;
	if (sessionUser) {
		sessionLinks = (
			<li>
				<ProfileButton user={sessionUser} />
			</li>
		);
	} else {
		sessionLinks = (
			<>
				<LoginFormModal />
				<li>
					<NavLink to="/signup">Sign Up</NavLink>
				</li>
			</>
		);
		// sessionLinks = (
		// 	<>
		// 		<li>
		// 			<NavLink to="/login">Log In</NavLink>
		// 		</li>
		// 		<li>
		// 			<NavLink to="/signup">Sign Up</NavLink>
		// 		</li>
		// 	</>
		// );
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

	// return (
	// 	<nav>
	// 		<ul className="menu">
	// 			<li>
	// 				<NavLink exact to="/">
	// 					Home
	// 				</NavLink>
	// 			</li>
	// 			{isLoaded && sessionLinks}
	// 		</ul>
	// 	</nav>
	// );
}

export default Navigation;
