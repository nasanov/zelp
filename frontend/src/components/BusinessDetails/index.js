import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReviews } from '../../store/reviews';
// import { getOneBusiness } from '../../store/businesses';
import './BusinessDetail.css';
import BusinessInfo from './BusinessInfo'
import BusinessReviews from './BusinessReviews';

export default function BusinessDetails() {
	let { id } = useParams();
	const business = useSelector(state => state.business[id]);
	const reviews = useSelector(state => state.reviews);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getReviews(id));
		// dispatch(getOneBusiness(id));
	}, [dispatch, id]);

	console.log('***** REVIEWS *****', reviews.reviews);

	return (
		<div className="main_container">
			<BusinessInfo business={business}/>
			<BusinessReviews reviews={reviews.reviews} business_id={id}/>
		</div>
	);
}
