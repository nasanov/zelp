import { NavLink } from 'react-router-dom';

export default function Businesses({ businesses }) {
	let arr = [];
	for (let i in businesses) {
		arr.push(businesses[i]);
	}
	// console.log(arr);

	return (
		<div>
			<h1>All businesses page</h1>
			{arr.map(biz => {
				return (
					<div>
						<NavLink to={`/businesses/${biz.id}`}>{biz.name}</NavLink>
						<img src={`${biz.image_url}`} width={'140px'} alt={`${biz.name}`}></img>
						<p>Address: {biz.address}</p>
						<p>Rating: {biz.rating}</p>
						<p>Hours: {biz.hours}</p>
						<p>Phone: {biz.phone}</p>
						<p>Price: {biz.price}</p>
					</div>
				);
			})}
		</div>
	);
}
