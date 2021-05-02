import GoogleApiWrapper from '../GoogleMap/index';
import rating_1 from '../../images/regular_1@2x.png';
import rating_2 from '../../images/regular_2@2x.png';
import rating_3 from '../../images/regular_3@2x.png';
import rating_4 from '../../images/regular_4@2x.png';
import rating_5 from '../../images/regular_5@2x.png';
import './BusinessInfo.css';
export default function BusinessInfo({ business }) {
	const rating = [rating_1, rating_2, rating_3, rating_4, rating_5];
	let ratings = [];
	business?.Reviews.forEach(el => {
		ratings.push(parseInt(el?.rating));
	});
	// console.log(ratings);
	let sum = 0;
	ratings.forEach(el => {
		sum += el;
	});
	// console.log(sum);
	let average_rating = Math.floor(sum / ratings.length);
	return (
		<>
			<div className="business-info-header">
				<div className="business-info-header-content">
					<h1 className="business-info-title">{business?.name}</h1>
					<div className="business-info-container">
						<span>
							<img src={rating[average_rating - 1]} alt="business-info-rating"></img>
						</span>
						<span className="business-info-reviews">{business?.Reviews.length} reviews</span>
					</div>
					<span className="business-info-categories">
						{business?.Categories[0]?.name} {' • '} {business?.Categories[1]?.name}
					</span>
				</div>
				<div className="business-info-photos">
					{business?.photos.map((el, index) => (
						<img
							src={`${el}`}
							height={'380px'}
							// style={{ opacity: '0.7' }}
							key={el}
							alt="el"
							className={`photo${index + 1}`}
						></img>
					))}
				</div>
			</div>
			<div className="business-info-additional_info">
				<div className="business-information">
					<div className="detail-entry">
						<span>Address: </span>
						<span>{business?.address}</span>
					</div>
					<div className="detail-entry">
						<span>Hours: </span>
						<span>{business?.hours}</span>
					</div>
					<div className="detail-entry">
						<span>Phone: </span>
						<span>
							<a href={`tel:${business?.phone}`} className="phoneNumber">
								{business?.phone}
							</a>
						</span>
					</div>
					<div className="detail-entry">
						<span>Price: </span>
						<span>{business?.price}</span>
					</div>
					<div className="detail-entry">{business?.is_closed ? <span>Open</span> : <span>Closed</span>}</div>
				</div>
				<div className="location">
					<GoogleApiWrapper business={business} />
				</div>
			</div>
		</>
	);
}
