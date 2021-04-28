import { csrfFetch } from './csrf';
const LOAD = 'reviews/LOAD';
// const ADD_ONE = 'reviews/ADD_ONE'

const load = reviews => ({
	type: LOAD,
	reviews,
});
// const addOneReview = review => ({
//     type: ADD_ONE,
//     review
// })

export const getReviews = id => async dispatch => {
	const res = await csrfFetch(`/api/reviews/${id}`);
	console.log(res);
	if (res.ok) {
		const reviews = await res.json();
		console.log('--------', reviews);
		dispatch(load(reviews));
	}
};

// export const addReview = obj => async dispatch => {
// 	const response = await fetch(`/api/reviews`, {
// 		method: 'POST',
// 		body: JSON.stringify(obj),
// 		headers: { 'Content-Type': 'application/json' },
// 	});

// 	if (response.ok) {
// 		const review = await response.json();
// 		console.log(review);
// 		dispatch(addOneReview(review));
// 		return review;
// 	}
// };

const initialState = {
	reviews: [],
};

const reviewsReducer = (state = initialState, action) => {
	console.log(action);
	switch (action.type) {
		case LOAD: {
			const allReviews = {};
			action.reviews.forEach(review => {
				allReviews[review.id] = review;
			});
			return {
				...allReviews,
				...state,
				reviews: action.reviews,
			};
		}
		// case ADD_ONE: {
		// 	//
		// }
		default:
			return state;
	}
};

export default reviewsReducer;
