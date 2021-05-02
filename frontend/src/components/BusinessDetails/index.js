import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReviews } from '../../store/reviews';
// import { getOneBusiness } from '../../store/businesses';
import './BusinessDetail.css';
import BusinessInfo from './BusinessInfo';
import BusinessReviews from './BusinessReviews';

export default function BusinessDetails() {
	let { id } = useParams();
	const business = useSelector(state => state.business[id]);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getReviews(id));
	}, [dispatch, id]);

	return (
		<div className="main_container">
			<BusinessInfo business={business} />
			<BusinessReviews business_id={id} />
		</div>
	);
}
