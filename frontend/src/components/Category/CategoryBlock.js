import { NavLink } from 'react-router-dom';
import rating_1 from '../../images/small_1@2x.png';
import rating_2 from '../../images/small_2@2x.png';
import rating_3 from '../../images/small_3@2x.png';
import rating_4 from '../../images/small_4@2x.png';
import rating_5 from '../../images/small_5@2x.png';
import './CategoryBlock.css';

export default function CategoryBlock({ business, index }) {
	const rating = [rating_1, rating_2, rating_3, rating_4, rating_5];
	return (
		<div className="container">
			<div className="category-title">
				<NavLink to={`/businesses/${business.id}`}>
					{index + 1}
					{'.  '}
					{business.name}
				</NavLink>
			</div>
			<div>
				<NavLink to={`/businesses/${business.id}`}>
					<img src={`${business.image_url}`} alt={`${business.name}`} className="bus_img"></img>
				</NavLink>
			</div>
			<div className="additional_info">
				<div className="detail-entry">
					<span>Address: </span>
					<span>{business.address}</span>
				</div>
				<div className="detail-entry">
					<span>Rating: </span>
					<span>
						<img src={rating[business.rating - 1]} alt="rating_stars"></img>
					</span>
				</div>
				<div className="detail-entry">
					<span>Hours: </span>
					<span>{business.hours}</span>
				</div>
				<div className="detail-entry">
					<span>Phone: </span>
					<span>
						<a href={`tel:${business.phone}`} className="phoneNumber">
							{business.phone}
						</a>
					</span>
				</div>
				<div className="detail-entry">
					<span>Price: </span>
					<span>{business.price}</span>
				</div>
			</div>
		</div>
	);
}
