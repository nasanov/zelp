import { useParams } from 'react-router-dom';
import GoogleApiWrapper from '../GoogleMap/index';

export default function BusinessDetails({ businesses }) {
	let { id } = useParams();
	let business = businesses[id];
	// console.log('buz', business);

	return (
		<div>
			<h1>{business.name}</h1>
			<div>
				<img src={`${business.image_url}`} width={'440px'} alt={`${business.name}`}></img>
				<p>Address: {business.address}</p>
				<p>Rating: {business.rating}</p>
				<p>Hours: {business.hours}</p>
				<p>Phone: {business.phone}</p>
				<p>Price: {business.price}</p>
				{business.is_closed ? <p>Open</p> : <p>Closed</p>}
				{business.photos.map(el => (
					<img src={`${el}`} width={'300px'}></img>
					))}
				<GoogleApiWrapper business={business} />
			</div>
		</div>
	);
}
