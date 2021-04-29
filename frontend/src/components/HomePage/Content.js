import React from 'react'; // { useState }
import { useSelector } from 'react-redux'; // useDispatch,
import { NavLink } from 'react-router-dom';
import rating_1 from '../../images/small_1@2x.png';
import rating_2 from '../../images/small_2@2x.png';
import rating_3 from '../../images/small_3@2x.png';
import rating_4 from '../../images/small_4@2x.png';
import rating_5 from '../../images/small_5@2x.png';

export default function Content() {
	const rating = [rating_1, rating_2, rating_3, rating_4, rating_5];
	const businesses = useSelector(state => state.business);
	let arr = Object.values(businesses).sort((a, b) => b.rating - a.rating);

	let topBusinesses = [];
	for (let i = 0; i < 5; i++) {
		topBusinesses.push(arr[i]);
	}
	console.log(topBusinesses);
	return (
		<div>
			{topBusinesses.map(el => {
				return (
					<div key={el?.id}>
						<NavLink to={`/businesses/${el?.id}`}>
							<h3>{el?.name}</h3>
						</NavLink>
						<p>
							<img src={rating[el?.rating - 1]} alt="rating_stars"></img>
						</p>
						<NavLink to={`/businesses/${el?.id}`}>
							<img src={`${el?.image_url}`} alt={`${el?.name}`}></img>
						</NavLink>
					</div>
				);
			})}
		</div>
	);
}
