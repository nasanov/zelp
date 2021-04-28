import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GoogleApiWrapper from '../GoogleMap/index';
import { getReviews } from '../../store/reviews';
import { getOneBusiness } from '../../store/businesses';
import './BusinessDetail.css';
import rating_1 from '../../images/small_1@2x.png';
import rating_2 from '../../images/small_2@2x.png';
import rating_3 from '../../images/small_3@2x.png';
import rating_4 from '../../images/small_4@2x.png';
import rating_5 from '../../images/small_5@2x.png';

export default function BusinessDetails() {
	const rating = [rating_1, rating_2, rating_3, rating_4, rating_5]
	let { id } = useParams();
	const business = useSelector(state => state.business[id]);
	const sessionUser = useSelector(state => state.session.user);
	const reviews = useSelector(state => state.reviews.reviews);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getReviews(id));
		dispatch(getOneBusiness(id));
	}, [dispatch, id]);

	console.log('***** REVIEWS *****', reviews);

	return (
		<div className="main_container">
			<h1>{business?.name}</h1>
			<div>
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
					<img src={`${el}`} width={'300px'} key={el}></img>
				))}
				<div className="location">
					<GoogleApiWrapper business={business} />
				</div>
			</div>

			<h1>Reviews</h1>
			{/* <div className="reviews-container">
           {reviews.map((review) =>  {
             return (
               <div key={review.id}>
								 <div >{review.rating}</div>
                 <div >{review.review_text}</div>
                 <div >{review.createdAt}</div>
               </div>
             )
           })}
         </div> */}
		</div>
	);
}
