import rating_1 from '../../images/small_1@2x.png';
import rating_2 from '../../images/small_2@2x.png';
import rating_3 from '../../images/small_3@2x.png';
import rating_4 from '../../images/small_4@2x.png';
import rating_5 from '../../images/small_5@2x.png';
import GoogleApiWrapper from '../GoogleMap/index';

export default function BusinessInfo({ business }) {
	const rating = [rating_1, rating_2, rating_3, rating_4, rating_5];

	return (
		<>
			<h1>{business?.name}</h1>
			<div>
				<div className="location">
					<GoogleApiWrapper business={business} />
				</div>
				<img src={`${business?.image_url}`} width={'440px'} alt={`${business?.name}`}></img>

				<p>
					Rating: <img src={rating[business?.rating - 1]} alt="rating_stars"></img>
				</p>
				<p>Address: {business?.address}</p>
				<p>
					Phone:{' '}
					<a href={`tel:${business?.phone}`} className="phoneNumber">
						{business?.phone}
					</a>
				</p>
				<p>Price: {business?.price}</p>
				<p>Hours: {business?.hours}</p>
				{business?.is_closed ? <p>Open</p> : <p>Closed</p>}
				<h2>Photos:</h2>
				{business?.photos.map(el => (
					<img src={`${el}`} width={'300px'} key={el} alt="el"></img>
				))}
			</div>
		</>
	);
}
