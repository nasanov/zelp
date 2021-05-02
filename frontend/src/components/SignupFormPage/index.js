import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import './SignupForm.css';
import logo from '../../images/logo.png';

function SignupFormPage() {
	const dispatch = useDispatch();
	const sessionUser = useSelector(state => state.session.user);
	const [email, setEmail] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [errors, setErrors] = useState([]);

	if (sessionUser) return <Redirect to="/" />;

	const handleSubmit = e => {
		e.preventDefault();
		if (password === confirmPassword) {
			setErrors([]);
			return dispatch(sessionActions.signup({ email, username, password })).catch(async res => {
				const data = await res.json();
				if (data && data.errors) setErrors(data.errors);
			});
		}
		return setErrors(['Confirm Password field must be the same as the Password field']);
	};

	return (
		<>
			<nav className="signupFormNav">
				<NavLink to="/">
					<img src={logo} className="nav-logo" alt="nav-logo" height="70" />
				</NavLink>
			</nav>
			<div className="signup-container">
				<div className="signupWrap">
					<div className="switch-link-container">
						<h1 className="login-form-header">Sign Up for Zelp</h1>
						<span className="switchLinkName">Already on Zelp?</span>
						<NavLink to="/login" className="switchLink">
							Login
						</NavLink>
					</div>
					<form onSubmit={handleSubmit}>
						{errors.length ? (
							<div className="errorsContainer">
								<span>The following errors occurred:</span>
								<ul className="errorsList">
									{errors.map((error, idx) => (
										<li key={idx}>{error}</li>
									))}
								</ul>
							</div>
						) : (
							<div></div>
						)}
						<label>
							<input
								type="text"
								value={email}
								onChange={e => setEmail(e.target.value)}
								required
								placeholder="E-mail"
								className="login-input"
							/>
						</label>
						<label>
							<input
								type="text"
								value={username}
								onChange={e => setUsername(e.target.value)}
								required
								placeholder="Username"
								className="signup-input"
							/>
						</label>
						<label>
							<input
								type="password"
								value={password}
								onChange={e => setPassword(e.target.value)}
								required
								placeholder="Password"
								className="signup-input"
							/>
						</label>
						<label>
							<input
								type="password"
								value={confirmPassword}
								onChange={e => setConfirmPassword(e.target.value)}
								required
								placeholder="Confirm Password"
								className="signup-input"
							/>
						</label>
						<button type="submit" className="signup-btn">
							Sign Up
						</button>
					</form>
				</div>
				<div className="loginBanner">
					<img
						src="https://s3-media0.fl.yelpcdn.com/assets/2/www/img/7922e77f338d/signup/signup_illustration.png"
						alt="login-banner"
						className="banner-img"
					/>
				</div>
			</div>
		</>
	);
}

export default SignupFormPage;
