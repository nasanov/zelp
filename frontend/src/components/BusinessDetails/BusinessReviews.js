import ReviewForm from './ReviewForm';
// import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
// import * as sessionActions from '../../store/session';

export default function BusinessReviews({ business_id }) {
	// console.log("busid", business_id)
	const sessionUser = useSelector(state => state.session.user); // will use it later for add review form
	const reviews = Object.values(useSelector(state => state.reviews));
	// console.log('reviews', new Date(reviews[0]?.createdAt).toDateString());
	let sortedReviews = reviews.sort((a, b) => b.id - a.id);
	// .toDateString() + ' ' + review.createdAt.toLocaleTimeString()
	const editReview = () => {};
	const deleteReview = () => {};

	let isReviewed = false;
	for (const review of sortedReviews) {
		if (review.user_id === sessionUser.id) {
			isReviewed = true;
		}
	}
	console.log('isReviewd', reviews);

	return (
		<>
			<h1>Reviews</h1>
			<div className="reviews-container">
				{sortedReviews.map(review => {
					// review.createdAt = new Date(review.createdAt)
					let reviewDate = new Date(review?.createdAt).toDateString() + ' ' + new Date(review?.createdAt).toLocaleTimeString()
					return (
						<div key={review.id}>
							{review.user_id === sessionUser.id ? (
								<div>
									<button onClick={editReview}>Edit</button> <button onClick={deleteReview}>Delete</button>
								</div>
							) : null}
							<div>Rating: {review.rating}</div>
							<div>Review text: {review.review_text}</div>
							<div>Created: {reviewDate}</div>
							<div>Username: {review.User.username}</div>
						</div>
					);
				})}
			</div>
			{sessionUser && isReviewed === false && <ReviewForm business_id={business_id} />}
		</>
	);
}
