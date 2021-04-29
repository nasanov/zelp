import { csrfFetch } from './csrf';
const LOAD = 'reviews/LOAD';
const ADD_ONE = 'reviews/ADD_ONE';

const load = reviews => ({
	type: LOAD,
	reviews,
});

const addOneReview = review => ({
	type: ADD_ONE,
	review,
});

export const getReviews = id => async dispatch => {
	const res = await csrfFetch(`/api/reviews/${id}`);
	console.log('reviews store', res);
	if (res.ok) {
		const reviews = await res.json();
		// console.log('--------', reviews);
		dispatch(load(reviews));
	}
};

export const addReview = reviewObj => async dispatch => {
	console.log('reviewObj', reviewObj);
	const res = await csrfFetch(`/api/reviews`, {
		method: 'POST',
		body: JSON.stringify(reviewObj),
		headers: { 'Content-Type': 'application/json' },
	});

	if (res.ok) {
		const review = await res.json();
		console.log(review);
		dispatch(addOneReview(review));
		return review;
	} else {
		throw res;
	}
};

const reviewsReducer = (state = {}, action) => {
	// console.log(action);
	switch (action.type) {
		case LOAD: {
			let newState = { ...state };
			action.reviews.forEach(review => {
				newState[review.id] = review;
			});
			return newState;
		}
		case ADD_ONE: {
			let newState = { ...state };
			newState[action.review.id] = action.review;
			return newState;
		}
		default:
			return state;
	}
};

export default reviewsReducer;
