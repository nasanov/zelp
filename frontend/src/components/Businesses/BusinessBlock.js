import { NavLink } from 'react-router-dom';
import './BusinessBlock.css';
import rating_1 from '../../images/small_1@2x.png';
import rating_2 from '../../images/small_2@2x.png';
import rating_3 from '../../images/small_3@2x.png';
import rating_4 from '../../images/small_4@2x.png';
import rating_5 from '../../images/small_5@2x.png';

export default function BusinessBlock({ business }) {
	const rating = [rating_1, rating_2, rating_3, rating_4, rating_5]
	return (
		<div className="container">
			<div className="title">
				<NavLink to={`/businesses/${business.id}`}>{business.name}</NavLink>
			</div>
			<div clasasName="bus_img">
				<NavLink to={`/businesses/${business.id}`}>
					<img src={`${business.image_url}`} alt={`${business.name}`} className="bus_img"></img>
				</NavLink>
			</div>
			<div className="additional_info">
				<p>Address: {business.address}</p>
				<p>Rating: {business.rating}</p>
				<p>
					Rating: <img src={rating[business.rating - 1]} alt="rating_stars"></img>
				</p>
				<p>Hours: {business.hours}</p>
				<p>Phone: <a href={`tel:${business.phone}`} className='phoneNumber'>{business.phone}</a></p>
				<p>Price: {business.price}</p>
			</div>
		</div>
	);
}
