import { csrfFetch } from './csrf';

const GET_BUSINESSES = 'businesses/getBusinesses';

export const getBusinesses = businesses => {
	return {
		type: GET_BUSINESSES,
		businesses,
	};
};

export const fetchBiz = () => async dispatch => {
	const res = await csrfFetch('/api/businesses');
	if (!res.ok) throw res;
	let AllBiz = {};
	try {
		let businesses = await res.json();

		businesses.forEach(business => {
			// console.log(business)
			AllBiz[business.id] = business;
		});
		// console.log(obj)
		dispatch(getBusinesses(AllBiz));
		return AllBiz;
	} catch (err) {
		throw err;
	}
};

const businessesReducer = (state = {}, action) => {
	let newState;
	switch (action.type) {
		case GET_BUSINESSES:
			newState = { ...state, ...action.businesses };
			return newState;
		default:
			return state;
	}
};

export default businessesReducer;
