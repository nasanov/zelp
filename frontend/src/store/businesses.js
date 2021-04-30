import { csrfFetch } from './csrf';

// const ADD_ONE = 'business/ADD_ONE';
const LOAD_BUSINESSES = 'businesses/loadBusinesses';

export const loadBusinesses = businesses => {
	return {
		type: LOAD_BUSINESSES,
		businesses,
	};
};

// const addOneBusiness = business => ({
// 	type: ADD_ONE,
// 	business,
// });

export const getBusinesses = () => async dispatch => {
	const res = await csrfFetch('/api/businesses');
	// console.log('hello');
	if (!res.ok) throw res;
	let AllBiz = {};
	let businesses = await res.json();
	businesses.forEach(business => {
		AllBiz[business.id] = business;
	});
	dispatch(loadBusinesses(AllBiz));
	return AllBiz;
};

// export const getOneBusiness = id => async dispatch => {
// 	const res = await fetch(`/api/businesses/${id}`);
// 	if (!res.ok) throw res;
// 	let business = await res.json();
// 	dispatch(addOneBusiness(business));
// };

const businessesReducer = (state = {}, action) => {
	let newState;
	switch (action.type) {
		case LOAD_BUSINESSES:
			newState = { ...state, ...action.businesses };
			return newState;
		default:
			return state;
	}
};

export default businessesReducer;
