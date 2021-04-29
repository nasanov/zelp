import ReviewForm from './ReviewForm'
// import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
// import * as sessionActions from '../../store/session';

export default function BusinessReviews({business_id}) {
	// console.log("busid", business_id)
		const sessionUser = useSelector(state => state.session.user);  // will use it later for add review form
		const reviews = Object.values(useSelector(state => state.reviews));
		console.log("reviews", reviews)
		let sortedReviews = reviews.sort((a, b) => b.id - a.id);
		return (
			<>
				<h1>Reviews</h1>
				<div className="reviews-container">
						{sortedReviews.map((review) =>  {
							return (
								<div key={review.id}>
									<div>{review.rating}</div>
									<div>{review.review_text}</div>
									<div>{review.createdAt}</div>
									<div>{review.user_id}</div>
								</div>
							)
						})}
				</div>

				{sessionUser && <ReviewForm business_id={business_id}/>}
			</>
		)

}
