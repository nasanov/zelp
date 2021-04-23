import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './LoginForm.css';

function LoginFormPage() {
	const dispatch = useDispatch();
	const sessionUser = useSelector(state => state.session.user);
	const [credential, setCredential] = useState('');
	const [password, setPassword] = useState('');
	const [errors, setErrors] = useState([]);

	if (sessionUser) return <Redirect to="/" />;

	const handleSubmit = e => {
		e.preventDefault();
		setErrors([]);
		return dispatch(sessionActions.login({ credential, password })).catch(async res => {
			const data = await res.json();
			if (data && data.errors) setErrors(data.errors);
		});
	};

	return (
		<div className="loginWrap">
			<h1>Login</h1>
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
				) : <div></div>}

				<label>
					<input
						type="text"
						value={credential}
						onChange={e => setCredential(e.target.value)}
						required
						placeholder="Username or Email"
					/>
				</label>
				<label>
					<input
						type="password"
						value={password}
						onChange={e => setPassword(e.target.value)}
						required
						placeholder="Password"
					/>
				</label>
				<button type="submit" id="submitButton" className="buttonPrimary">
					Log In
				</button>
			</form>
		</div>
	);
}

export default LoginFormPage;
