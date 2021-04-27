import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import './HomePage.css';

function HomePage() {
	const dispatch = useDispatch();
	const sessionUser = useSelector(state => state.session.user);


	return (
		<div className="main-content">
			<h1>Hello world</h1>
		</div>
	);
}

export default HomePage;
