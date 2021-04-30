import { csrfFetch } from './csrf';

// const ADD_ONE = 'business/ADD_ONE';
const LOAD_BUSINESSES = 'businesses/loadBusinesses';
const LOAD_FOUND_BUSINESSES = 'businesses/loadFoundBusinesses';

export const loadBusinesses = businesses => {
	return {
		type: LOAD_BUSINESSES,
		businesses,
	};
};

export const loadFoundBusinesses = foundBusinesses => {
	return {
		type: LOAD_FOUND_BUSINESSES,
		foundBusinesses,
	};
};

export const getBusinesses = () => async dispatch => {
	const res = await csrfFetch('/api/businesses');
	// console.log('hello');
	if (!res.ok) throw res;
	let allBusinesses = {};
	let businesses = await res.json();
	businesses.forEach(business => {
		allBusinesses[business.id] = business;
	});
	dispatch(loadBusinesses(allBusinesses));
	return allBusinesses;
};

export const getSearchResults = term => async dispatch => {
	const res = await csrfFetch(`/api/businesses?name=${term}`);
	console.log('hello');
	if (!res.ok) throw res;
	let foundBusiness = {};
	let businesses = await res.json();
	businesses.forEach(business => {
		foundBusiness[business.id] = business;
	});
	dispatch(loadFoundBusinesses(foundBusiness));
	return foundBusiness;
};

// export const getOneBusiness = id => async dispatch => {
// 	const res = await fetch(`/api/businesses/${id}`);
// 	if (!res.ok) throw res;
// 	let business = await res.json();
// 	dispatch(addOneBusiness(business));
// };

const businessesReducer = (state = {}, action) => {
	switch (action.type) {
		case LOAD_BUSINESSES: {
			let newState;
			newState = { ...state, ...action.businesses };
			return newState;
		}
		case LOAD_FOUND_BUSINESSES: {
			let newState = { ...state };
			// let foundBusinesses;
			newState.foundBusinesses = { ...action.foundBusinesses };
			return newState;
		}
		default:
			return state;
	}
};

export default businessesReducer;
