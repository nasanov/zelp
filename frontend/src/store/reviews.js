import { csrfFetch } from './csrf';
const LOAD = 'reviews/LOAD';
const ADD_ONE = 'reviews/ADD_ONE';
const REMOVE_ONE = 'reviews/REMOVE_ONE';
const EDIT_ONE = 'reviews/EDIT_ONE'

const load = reviews => ({
	type: LOAD,
	reviews,
});

const addOneReview = review => ({
	type: ADD_ONE,
	review,
});

const editOneReview = review => ({
	type: EDIT_ONE,
	review
});

const removeReview = id => ({
	type: REMOVE_ONE,
	id
});

export const getReviews = id => async dispatch => {
	const res = await csrfFetch(`/api/reviews/${id}`);
	if (res.ok) {
		const reviews = await res.json();
		// console.log('--------', reviews);
		dispatch(load(reviews));
	}
};

export const addReview = reviewObj => async dispatch => {
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

export const editReview = reviewObj => async dispatch => {
	const res = await csrfFetch(`/api/reviews/${reviewObj.id}`, {
		method: 'PATCH',
		body: JSON.stringify(reviewObj),
		headers: { 'Content-Type': 'application/json' },
	});

	if (res.ok) {
		const review = await res.json();
		console.log(review);
		dispatch(editOneReview(review));
		return review;
	} else {
		throw res;
	}
};

export const deleteReview = id => async dispatch => {
	const res = await csrfFetch(`/api/reviews`, {
		method: "DELETE",
		body: JSON.stringify({ id }),
	});
	console.log(res)
	if (res.ok) {
		dispatch(removeReview(id));
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
		case EDIT_ONE: {
			let newState = { ...state };
			newState[action.review.id] = action.review;
			return newState;
		}
		case REMOVE_ONE:
			let newState = { ...state };
			delete newState[action.id];
			return newState;
		default:
			return state;
	}
};

export default reviewsReducer;
