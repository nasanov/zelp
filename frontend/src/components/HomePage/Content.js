import React from 'react'; // { useState }
import { useSelector } from 'react-redux'; // useDispatch,
import { NavLink } from 'react-router-dom';
import rating_1 from '../../images/small_1@2x.png';
import rating_2 from '../../images/small_2@2x.png';
import rating_3 from '../../images/small_3@2x.png';
import rating_4 from '../../images/small_4@2x.png';
import rating_5 from '../../images/small_5@2x.png';
import './Content.css';

export default function Content() {
	const rating = [rating_1, rating_2, rating_3, rating_4, rating_5];
	const businesses = useSelector(state => state.business);
	let arr = Object.values(businesses).sort((a, b) => b.rating - a.rating);

	let topBusinesses = [];
	for (let i = 0; i < 5; i++) {
		topBusinesses.push(arr[i]);
	}
	// console.log(topBusinesses[0]?.Categories);
	// console.log(topBusinesses);
	return (
		<>
			<div className="content">
				{topBusinesses.map((el, index) => {
					return (
						<div key={index} className="businesses">
							<div className="card__wrapper">
								<div className="card__photo">
									<NavLink to={`/businesses/${el?.id}`}>
										<img
											src={`${el?.image_url}`}
											alt={`${el?.name}`}
											width="298px"
											height="180px"
											className="img-link"
										></img>
									</NavLink>
								</div>
								<div className="businesses-container">
									<NavLink to={`/businesses/${el?.id}`}>
										<h3 className="businesses__name-link">{el?.name}</h3>
									</NavLink>
									<div className="businesses-rating">
										<span className="review-counter">{el?.Reviews.length} reviews</span>
										<span>
											<img src={rating[el?.rating - 1]} alt="rating_stars"></img>
										</span>
									</div>
									<div className="business-info">
										<span className="businesses-info-price">{el?.price}</span>
										<span className="business-info-cat">
											{el?.Categories[0]?.name} {' • '} {el?.Categories[1]?.name}
										</span>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
			<div className="see-more-businesses">
				<NavLink to="/businesses">See more businesses</NavLink>
			</div>
		</>
	);
}
