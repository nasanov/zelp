'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			'Reviews',
			[
				{
					review_text:
						'Great sunday funday for the family and friends\nAmazing for riding and walking or running\nRefreshment stands are definitely appreciated',
					rating: 5,
					createdAt: '2021-03-06 15:00:19',
					updatedAt: '2021-03-06 15:00:19',
					business_id: 1,
					user_id: 7,
				},
				{
					review_text:
						'Beautiful park overall. Big walking areas with lots of space. Long enough for a stroll or a run. Bike rental spots convenient located. The most gorgeous big...',
					rating: 5,
					createdAt: '2021-01-03 09:55:09',
					updatedAt: '2021-01-03 09:55:09',
					business_id: 1,
					user_id: 10,
				},
				{
					review_text:
						'I love Hermann Park, in fact I spent some time working there, but most of time just as a frequent visitor who loves it. The park is beautiful and has so...',
					rating: 5,
					createdAt: '2021-03-25 07:39:55',
					updatedAt: '2021-03-25 07:39:55',
					business_id: 1,
					user_id: 6,
				},
				{
					review_text:
						'Been here several times, and this is a pretty cool place. Perfect for picnics, and my nephew really-really likes these spots. It has a lot of areas with...',
					rating: 5,
					createdAt: '2021-04-05 00:55:42',
					updatedAt: '2021-04-05 00:55:42',
					business_id: 2,
					user_id: 1,
				},
				{
					review_text:
						'Very pretty space in Houston to see some art exhibits and have your kids play! The parking is a little difficult here--will need to pay for either street...',
					rating: 4,
					createdAt: '2021-04-13 07:25:54',
					updatedAt: '2021-04-13 07:25:54',
					business_id: 2,
					user_id: 17,
				},
				{
					review_text:
						'Love this park.  Did family day in the park.  We even decided to rent some scooters and explore the downtown area and discovery.   Scooters are not allowed...',
					rating: 4,
					createdAt: '2021-02-21 18:17:29',
					updatedAt: '2021-02-21 18:17:29',
					business_id: 2,
					user_id: 1,
				},
				{
					review_text:
						'Love this place. \n\nThe Houston Zoo is a 55-acre zoological park located within Hermann Park. The zoo houses over 6,000 animals from 900 species. It receives...',
					rating: 5,
					createdAt: '2021-04-26 12:12:36',
					updatedAt: '2021-04-26 12:12:36',
					business_id: 3,
					user_id: 3,
				},
				{
					review_text:
						'Was there for a family visit to Zoolights 2020.  Since the pandemic is happening the zoo had folks buy tickets online to limit the number of people,  and...',
					rating: 5,
					createdAt: '2021-03-25 00:02:41',
					updatedAt: '2021-03-25 00:02:41',
					business_id: 3,
					user_id: 9,
				},
				{
					review_text:
						"Love the Houston Zoo! I didn't have high expectations since it's nestled into Hermann Park but the zoo is big and has a lot of exhibits. The elephants are...",
					rating: 5,
					createdAt: '2020-11-21 17:34:21',
					updatedAt: '2020-11-21 17:34:21',
					business_id: 3,
					user_id: 21,
				},
				{
					review_text:
						"My review is focused on Memorial Park's South Picnic Loop. \n\nHighlight of this picnic area is that you can drive through the loop and park right next to...",
					rating: 5,
					createdAt: '2020-11-02 13:56:12',
					updatedAt: '2020-11-02 13:56:12',
					business_id: 4,
					user_id: 3,
				},
				{
					review_text:
						'Probably the most well known park in Houston.  Th eres all kinds of stuff to do here.  Obviously running/walking is done around the 3 mile loop which is the...',
					rating: 5,
					createdAt: '2020-06-07 09:39:20',
					updatedAt: '2020-06-07 09:39:20',
					business_id: 4,
					user_id: 11,
				},
				{
					review_text:
						'This park is my go-to since the pandemic started and the gyms closed-- a big loop, lots of greens, a new lake/walkway, and even more new construction...',
					rating: 5,
					createdAt: '2020-10-09 15:27:01',
					updatedAt: '2020-10-09 15:27:01',
					business_id: 4,
					user_id: 21,
				},
				{
					review_text:
						'BASEBALL IS BACK BABYYYYYY! We are SO PUMPED! \n\nWe moved to Houston in spring of 2020. Awesome to be moving to a city with MLB baseball... then Covid hit....',
					rating: 5,
					createdAt: '2021-04-10 21:19:16',
					updatedAt: '2021-04-10 21:19:16',
					business_id: 5,
					user_id: 17,
				},
				{
					review_text:
						'My husband and I love the MLB, plan on attending a game at all the stadiums. This park was our eighth, and our first enclosed park.\n\nI loved this field....',
					rating: 5,
					createdAt: '2020-12-10 11:31:22',
					updatedAt: '2020-12-10 11:31:22',
					business_id: 5,
					user_id: 1,
				},
				{
					review_text:
						"First time at this stadium. Not sure about parking since I walked from my hotel, but the train does drop off right at the stadium. It's beautiful inside,...",
					rating: 4,
					createdAt: '2021-04-24 16:57:23',
					updatedAt: '2021-04-24 16:57:23',
					business_id: 5,
					user_id: 7,
				},
				{
					review_text:
						"Citizens is great. They've done a great job with Covid precautions and they're class sizes are small. The instructors keep the workouts fresh and exciting....",
					rating: 5,
					createdAt: '2020-11-30 10:15:43',
					updatedAt: '2020-11-30 10:15:43',
					business_id: 6,
					user_id: 16,
				},
				{
					review_text:
						"I had never taken a PIlates class, so when I decided to join Citizen Pilates in September at their Oak Forest location, I was a little apprehensive as I'm...",
					rating: 5,
					createdAt: '2020-11-23 05:51:24',
					updatedAt: '2020-11-23 05:51:24',
					business_id: 6,
					user_id: 17,
				},
				{
					review_text:
						'I started visiting this location a couple years ago, but after I stumbled on their live FANTASTIC online classes during the mandatory COVID Stay at Home...',
					rating: 5,
					createdAt: '2020-11-13 10:35:41',
					updatedAt: '2020-11-13 10:35:41',
					business_id: 6,
					user_id: 5,
				},
				{
					review_text:
						'After parking on Sabine Street, we walked up a set of stairs to the plaza overlooking downtown. There was a wide open green space, as well as a stage for...',
					rating: 5,
					createdAt: '2021-01-02 10:52:21',
					updatedAt: '2021-01-02 10:52:21',
					business_id: 7,
					user_id: 10,
				},
				{
					review_text:
						"Located in the heart of Houston downtown, Buffalo Bayou Park is actually one of Houston's largest urban green spaces. It consists of 160 acres and miles of...",
					rating: 5,
					createdAt: '2020-12-16 06:50:34',
					updatedAt: '2020-12-16 06:50:34',
					business_id: 7,
					user_id: 16,
				},
				{
					review_text:
						"Such a beautifully big park! I'm a native Houstonian, but I hadn't been here in so long. I decided to spend some time with family since quarantine has...",
					rating: 5,
					createdAt: '2020-06-10 21:05:16',
					updatedAt: '2020-06-10 21:05:16',
					business_id: 7,
					user_id: 10,
				},
				{
					review_text:
						'Love THE GYM!  The owners, Marvin & Steve are the nicest!  All staff and trainers are so helpful.  Location and parking is great!  The facility is super...',
					rating: 5,
					createdAt: '2020-06-22 14:45:16',
					updatedAt: '2020-06-22 14:45:16',
					business_id: 8,
					user_id: 13,
				},
				{
					review_text:
						"Not to be confused with the GYN as in the OB-GYN, although I'm sure some OB-GYN people come here.\n\nThe people running this little River Oaks gym are super...",
					rating: 5,
					createdAt: '2020-12-15 03:54:52',
					updatedAt: '2020-12-15 03:54:52',
					business_id: 8,
					user_id: 1,
				},
				{
					review_text:
						"Love this place! Been a member for a few years now. It's always super clean. The crowd is mostly people there who just want to work out and get healthy....",
					rating: 5,
					createdAt: '2021-03-21 06:20:20',
					updatedAt: '2021-03-21 06:20:20',
					business_id: 8,
					user_id: 21,
				},
				{
					review_text:
						'Me and my friend did the Alice room. We finished right at the hour mark. It was nice that you get unlimited hints. The person who gave the hints did a great...',
					rating: 5,
					createdAt: '2021-01-21 06:00:07',
					updatedAt: '2021-01-21 06:00:07',
					business_id: 9,
					user_id: 16,
				},
				{
					review_text:
						'That was PRETTY fun. It was a group experience for work.\n\nWe solved it in a decent amount of time... But you do have to use your brain!\n\nSuper great staff....',
					rating: 5,
					createdAt: '2019-10-05 04:19:26',
					updatedAt: '2019-10-05 04:19:26',
					business_id: 9,
					user_id: 18,
				},
				{
					review_text:
						"This was my 83rd room. We did the murder mystery mansion room. Even though we didn't escape in the one hour, my sister and I really enjoyed doing this room....",
					rating: 5,
					createdAt: '2020-10-18 18:10:21',
					updatedAt: '2020-10-18 18:10:21',
					business_id: 9,
					user_id: 9,
				},
				{
					review_text:
						'I have been to all three locations for Citizen Pilates, and I love the classes and the instructors. Since attending classes here, I branched out to explore...',
					rating: 5,
					createdAt: '2020-11-06 10:25:57',
					updatedAt: '2020-11-06 10:25:57',
					business_id: 10,
					user_id: 16,
				},
				{
					review_text:
						'These classes have transformed into Covid friendly social distancing. The classes and equipment is super clean and you wear masks when working out. The...',
					rating: 5,
					createdAt: '2020-11-13 07:00:50',
					updatedAt: '2020-11-13 07:00:50',
					business_id: 10,
					user_id: 18,
				},
				{
					review_text:
						"Citizen Pilates is my daily reset from my never ending to do lists as a mother of three kids.  It's where I've gotten comfortable with being uncomfortable...",
					rating: 5,
					createdAt: '2020-11-09 05:46:11',
					updatedAt: '2020-11-09 05:46:11',
					business_id: 10,
					user_id: 19,
				},
				{
					review_text:
						"Houston's best kept secret. I googled top Escape Rooms in the USA and they were top 5! We were so excited to go, and it was like walking into a movie set...",
					rating: 5,
					createdAt: '2020-12-10 15:25:03',
					updatedAt: '2020-12-10 15:25:03',
					business_id: 11,
					user_id: 9,
				},
				{
					review_text:
						"One of the best escape rooms I've been to! Completely immersive where Madame Daphne stays in character from the moment you walk thru the door. \n\nThe details...",
					rating: 5,
					createdAt: '2020-02-18 08:26:06',
					updatedAt: '2020-02-18 08:26:06',
					business_id: 11,
					user_id: 7,
				},
				{
					review_text:
						'We walk into an empty suite, with no one to greet us. The experience has already begun. True to their word, Strange Bird Immersive is about so much more...',
					rating: 5,
					createdAt: '2019-08-18 18:17:40',
					updatedAt: '2019-08-18 18:17:40',
					business_id: 11,
					user_id: 2,
				},
				{
					review_text:
						'I recently came for a visit here for a friends birthday for a private heels class. And let me tell you Inner Me DID NOT disappoint the check in process was...',
					rating: 5,
					createdAt: '2020-12-20 08:36:19',
					updatedAt: '2020-12-20 08:36:19',
					business_id: 12,
					user_id: 19,
				},
				{
					review_text:
						'I have been coming here for 5 months now after my old pole dance studio in the city closed down. \n\nI appreciate that they have different tiers of membership...',
					rating: 5,
					createdAt: '2020-05-16 15:36:53',
					updatedAt: '2020-05-16 15:36:53',
					business_id: 12,
					user_id: 6,
				},
				{
					review_text:
						'InnerMe Studios is clean, has such a great aesthetic, and I feel comfortable to just try and enjoy the lesson. I felt so welcomed at my first pole class...',
					rating: 5,
					createdAt: '2021-01-27 09:46:08',
					updatedAt: '2021-01-27 09:46:08',
					business_id: 12,
					user_id: 12,
				},
				{
					review_text:
						"I've been an off/on member of Big Yoga since 2012. I LOVE everything about this yoga community. Everyone is so nice and welcoming! They make every effort to...",
					rating: 5,
					createdAt: '2021-03-30 08:32:53',
					updatedAt: '2021-03-30 08:32:53',
					business_id: 13,
					user_id: 17,
				},
				{
					review_text:
						'I was in Houston for my sons lacrosse tournament and dropped in for a class. Staff at the front was so friendly and the teacher I had was Angela- so great!...',
					rating: 5,
					createdAt: '2021-03-29 13:29:38',
					updatedAt: '2021-03-29 13:29:38',
					business_id: 13,
					user_id: 11,
				},
				{
					review_text:
						'My friend invited me to a class so I did a drop-in ($20). Best $20 ever spent!\n\nThe classroom was fully packed, the hot yoga was EXACTLY what I needed for 1...',
					rating: 5,
					createdAt: '2019-01-29 04:30:59',
					updatedAt: '2019-01-29 04:30:59',
					business_id: 13,
					user_id: 4,
				},
				{
					review_text:
						"This place is absolutely wonderful if you wanted to change up your exercise routine with something that's equally exciting and relaxing. Im an...",
					rating: 5,
					createdAt: '2021-01-28 11:27:43',
					updatedAt: '2021-01-28 11:27:43',
					business_id: 14,
					user_id: 7,
				},
				{
					review_text:
						"Do your body and your mind a favor and head right to Republic Aerial Yoga. I've taken yoga several times in several cities and this is by far the BEST...",
					rating: 5,
					createdAt: '2020-12-05 13:04:43',
					updatedAt: '2020-12-05 13:04:43',
					business_id: 14,
					user_id: 14,
				},
				{
					review_text:
						'OMG the best decision!\nI found this establishment when trying to book an aerial birthday for myself. I decided to try a class solo to see if I liked the...',
					rating: 5,
					createdAt: '2019-09-21 11:46:56',
					updatedAt: '2019-09-21 11:46:56',
					business_id: 14,
					user_id: 13,
				},
				{
					review_text:
						'The dig room was fun and challenging! Great team building activity with friends. I would highly recommend!',
					rating: 5,
					createdAt: '2021-01-01 13:52:35',
					updatedAt: '2021-01-01 13:52:35',
					business_id: 15,
					user_id: 18,
				},
				{
					review_text:
						'First off, let me say that I have played "Escape the Room\'s" games in California and they were beyond amazing. This location was an extreme disappointment....',
					rating: 1,
					createdAt: '2020-12-12 21:21:57',
					updatedAt: '2020-12-12 21:21:57',
					business_id: 15,
					user_id: 19,
				},
				{
					review_text:
						'So I am a huge escape the room enthusiast. I have participated in rooms all over Texas as well as in other states .\nSo first off this place is hard to find,...',
					rating: 1,
					createdAt: '2020-12-06 06:09:37',
					updatedAt: '2020-12-06 06:09:37',
					business_id: 15,
					user_id: 18,
				},
				{
					review_text:
						'Beautiful park in Houston that is packed with so many different options. Amazing that this 6 acre park has both small and large dog parks, an activity lawn,...',
					rating: 5,
					createdAt: '2021-01-28 11:40:58',
					updatedAt: '2021-01-28 11:40:58',
					business_id: 16,
					user_id: 21,
				},
				{
					review_text:
						'Thank you so much!!!! Finally kid area opened.   I know it was closed due to COVID.  It feels really good to have the kids area again.  Lots of great past...',
					rating: 5,
					createdAt: '2021-03-25 13:28:47',
					updatedAt: '2021-03-25 13:28:47',
					business_id: 16,
					user_id: 16,
				},
				{
					review_text:
						'Much needed update. Last time I penned my review for Levy Park, it was 2010 and this park was just an empty baseball field. Time has certainly changed, and...',
					rating: 5,
					createdAt: '2020-05-05 22:32:11',
					updatedAt: '2020-05-05 22:32:11',
					business_id: 16,
					user_id: 18,
				},
				{
					review_text:
						'This has become one of my favorite pilates reformer places in Houston.\nThe instructors each have different techniques of teaching which keeps the classes...',
					rating: 5,
					createdAt: '2021-03-05 10:39:15',
					updatedAt: '2021-03-05 10:39:15',
					business_id: 17,
					user_id: 18,
				},
				{
					review_text:
						'I love love love BRP!  All the instructors are friendly, helpful and clear with direction.  I love that the machines are easy to use and at the end of class...',
					rating: 5,
					createdAt: '2020-08-18 05:36:53',
					updatedAt: '2020-08-18 05:36:53',
					business_id: 17,
					user_id: 21,
				},
				{
					review_text:
						"First of all this studio is not closed. It's a little difficult to see as the studio is behind a bunch of trees. I tried out their 3 session trial each time...",
					rating: 4,
					createdAt: '2018-07-25 18:36:08',
					updatedAt: '2018-07-25 18:36:08',
					business_id: 17,
					user_id: 17,
				},
				{
					review_text:
						'I really like this studio! I love cycle and yoga, so to find a studio that does both and has strength training classes was amazing.\n\nThe cycle classes are...',
					rating: 5,
					createdAt: '2020-10-02 11:46:22',
					updatedAt: '2020-10-02 11:46:22',
					business_id: 18,
					user_id: 3,
				},
				{
					review_text:
						"Signed up for their new member special- $50 for one month of unlimited classes. That's an amazing deal considering their usual price is over $150/month....",
					rating: 4,
					createdAt: '2021-03-06 18:17:57',
					updatedAt: '2021-03-06 18:17:57',
					business_id: 18,
					user_id: 18,
				},
				{
					review_text:
						"I LOVE CYCLING HERE. I've tried lots of studios in Houston but this one feels like home. All the instructors are inspirational and work hard to connect with...",
					rating: 5,
					createdAt: '2019-12-24 09:01:59',
					updatedAt: '2019-12-24 09:01:59',
					business_id: 18,
					user_id: 13,
				},
				{
					review_text:
						"I never enjoyed working out consistently. After going to Washington Gym for over a year now I miss it if don't go every day. \n\nThe coaches are amazing and...",
					rating: 5,
					createdAt: '2019-06-27 16:33:58',
					updatedAt: '2019-06-27 16:33:58',
					business_id: 19,
					user_id: 5,
				},
				{
					review_text:
						"For the last several years I've been very inconsistent about working out. Always struggled to find the motivation to go longer than a few days. In October...",
					rating: 5,
					createdAt: '2020-02-05 06:06:22',
					updatedAt: '2020-02-05 06:06:22',
					business_id: 19,
					user_id: 12,
				},
				{
					review_text:
						"Overpriced, different workouts, nice staff\n\nI've just started with the gym but my impression so far is that $269/month for a 3-month contract is NYC prices...",
					rating: 3,
					createdAt: '2019-03-27 12:44:37',
					updatedAt: '2019-03-27 12:44:37',
					business_id: 19,
					user_id: 17,
				},
				{
					review_text:
						'Five stars because the coaching was excellent! I dropped in this week and called 4 times as well as left a voicemail about when I wanted to come in - I...',
					rating: 5,
					createdAt: '2020-11-04 07:49:07',
					updatedAt: '2020-11-04 07:49:07',
					business_id: 20,
					user_id: 1,
				},
				{
					review_text:
						'Great drop in experience here! Was able to get signed up and sign the waiver ahead of time. There was plenty of parking and the coach was ready for me when...',
					rating: 5,
					createdAt: '2019-12-02 07:29:33',
					updatedAt: '2019-12-02 07:29:33',
					business_id: 20,
					user_id: 1,
				},
				{
					review_text:
						'I joined CrossFit H-TOWN 2 weeks ago and I can sincerely say that it has been one of the best decisions I have ever made. I have always been active, usually...',
					rating: 5,
					createdAt: '2019-08-05 18:47:08',
					updatedAt: '2019-08-05 18:47:08',
					business_id: 20,
					user_id: 3,
				},
				{
					review_text:
						'This was a lovely spot for a carryout picnic and to soak in some nature and fresh air. Located only 15 minutes from downtown, the Houston Arboretum and...',
					rating: 5,
					createdAt: '2021-03-22 05:55:52',
					updatedAt: '2021-03-22 05:55:52',
					business_id: 21,
					user_id: 11,
				},
				{
					review_text:
						'Great place to go for a 5 mile hike to enjoy some nature within the city and explore the outdoors without having too far of a drive from home.\n\nParking\n$5...',
					rating: 5,
					createdAt: '2021-03-21 19:34:39',
					updatedAt: '2021-03-21 19:34:39',
					business_id: 21,
					user_id: 5,
				},
				{
					review_text:
						'Decided to pick up a lunch from my favorite Turkish place Istanbul and come here for a short nature walk. What a cool little gem of a park centrally located...',
					rating: 5,
					createdAt: '2021-03-21 13:24:34',
					updatedAt: '2021-03-21 13:24:34',
					business_id: 21,
					user_id: 16,
				},
				{
					review_text:
						'What a haven, a refuge, a place of peace and beauty in a natural setting providing a relaxing area for families, walkers with dogs, gorgeous flora, water...',
					rating: 5,
					createdAt: '2021-02-27 10:59:17',
					updatedAt: '2021-02-27 10:59:17',
					business_id: 22,
					user_id: 1,
				},
				{
					review_text:
						'I often visited a Japanese garden in  Hermann Park.Regarding McGovern Gardens, I was not interested in it. I just wanted to check bluebonnets flowers in...',
					rating: 5,
					createdAt: '2020-04-06 14:20:15',
					updatedAt: '2020-04-06 14:20:15',
					business_id: 22,
					user_id: 6,
				},
				{
					review_text:
						'Wonderful area for a picnic\nGreat walk with statues\nAmazing for a sunday funday\nThey usually have ice cream trucks for refreshments',
					rating: 5,
					createdAt: '2021-03-06 14:36:10',
					updatedAt: '2021-03-06 14:36:10',
					business_id: 22,
					user_id: 3,
				},
				{
					review_text:
						'Tried RYDE while visiting Houston and absolutely loved it! I had issues trying to book online, but upon arriving for my Saturday noon class was greeted and...',
					rating: 5,
					createdAt: '2020-11-08 15:08:36',
					updatedAt: '2020-11-08 15:08:36',
					business_id: 23,
					user_id: 16,
				},
				{
					review_text:
						"What a fun studio! This is only a cycling studio, so if you're looking for yoga - this is not the place. I've been to RYDE a hand full of times, and it's...",
					rating: 4,
					createdAt: '2019-07-30 15:06:58',
					updatedAt: '2019-07-30 15:06:58',
					business_id: 23,
					user_id: 10,
				},
				{
					review_text:
						'I would NOT recommend this studio/ gym as a safe place to workout during COVID.  They are not following capacity restrictions of 75% or social distancing at...',
					rating: 1,
					createdAt: '2020-12-31 16:49:54',
					updatedAt: '2020-12-31 16:49:54',
					business_id: 23,
					user_id: 1,
				},
				{
					review_text:
						'Came here right before everything was shut down for covid-19 on March 14. We literally got out with seconds to spare. It was 8 of us and we had an amazing...',
					rating: 5,
					createdAt: '2020-04-24 18:21:23',
					updatedAt: '2020-04-24 18:21:23',
					business_id: 24,
					user_id: 21,
				},
				{
					review_text:
						'We had a fabulous time   We got out of the room with 4 min to spare.  Walter was out "guide"  was outstanding.   He was personable, engaging, and funny...',
					rating: 5,
					createdAt: '2021-03-28 17:14:06',
					updatedAt: '2021-03-28 17:14:06',
					business_id: 24,
					user_id: 12,
				},
				{
					review_text:
						'I took my two preteen grandsons with me yesterday. We did the Gallery escape room. It was challenging but enjoyable. I appreciate the staff and they were...',
					rating: 5,
					createdAt: '2021-03-21 11:56:14',
					updatedAt: '2021-03-21 11:56:14',
					business_id: 24,
					user_id: 21,
				},
				{
					review_text:
						'Really cool art/sculpture park in the middle of a neighborhood! Since the pandemic hit, I have started to explore my backyard--there are so many dope spots...',
					rating: 5,
					createdAt: '2020-10-20 11:08:45',
					updatedAt: '2020-10-20 11:08:45',
					business_id: 25,
					user_id: 13,
				},
				{
					review_text:
						"Such an amazing park! Houston arts are the coolest! This is a park that really makes Houston unique. It's right down the street from the legendary Orange...",
					rating: 5,
					createdAt: '2020-12-16 07:10:37',
					updatedAt: '2020-12-16 07:10:37',
					business_id: 25,
					user_id: 18,
				},
				{
					review_text:
						"If you are in Houston and haven't check this park out and you sure miss out.\n\nThe park is small and free to the public.\nA lot of arts in the park and thanks...",
					rating: 4,
					createdAt: '2020-12-28 10:00:06',
					updatedAt: '2020-12-28 10:00:06',
					business_id: 25,
					user_id: 17,
				},
				{
					review_text:
						'This place rocks. Super friendly, hard workouts, chilled eucalyptus infused towels, and sometimes donuts. What else do you want man? Instructor rec: Taryn',
					rating: 5,
					createdAt: '2021-04-19 23:04:08',
					updatedAt: '2021-04-19 23:04:08',
					business_id: 26,
					user_id: 11,
				},
				{
					review_text:
						"It was my first time coming to RIDE and the front desk didn't even greet me, show me the studio, how to get set up on my bike, how to use the lockers, etc....",
					rating: 3,
					createdAt: '2020-03-03 07:33:42',
					updatedAt: '2020-03-03 07:33:42',
					business_id: 26,
					user_id: 9,
				},
				{
					review_text:
						'This is one of my favorite spin studio in Houston! Both Maddie and Riley are some of the best instructors. If you want a hardcore , sweat dripping, fun...',
					rating: 5,
					createdAt: '2019-07-20 05:35:30',
					updatedAt: '2019-07-20 05:35:30',
					business_id: 26,
					user_id: 9,
				},
				{
					review_text:
						"Do you like running? Check. \n\nDo you like getting free stuff for running? Check? \n\nCan you make it to Rice Village's Gorgeous Gael? Check. \n\nThen you should...",
					rating: 5,
					createdAt: '2017-12-01 07:24:50',
					updatedAt: '2017-12-01 07:24:50',
					business_id: 27,
					user_id: 5,
				},
				{
					review_text:
						'One of the better running clubs in Houston. (Others include West End, Kung Fu Saloon, and Karbach) The difference?\n\nFirst, the trail is one clean circle...',
					rating: 5,
					createdAt: '2017-03-28 18:04:33',
					updatedAt: '2017-03-28 18:04:33',
					business_id: 27,
					user_id: 13,
				},
				{
					review_text:
						"This has been around so long now, and it's got such a great community.  Come and run just to have fun or get your workout in.  No one's going to judge.  The...",
					rating: 5,
					createdAt: '2017-10-27 10:47:35',
					updatedAt: '2017-10-27 10:47:35',
					business_id: 27,
					user_id: 18,
				},
				{
					review_text:
						'This place is amazing, truly a site to see. Unreal is a word I use to describe. The tour is worth it. Rose Marie I believe gave us the tour and she did such...',
					rating: 5,
					createdAt: '2021-01-22 14:41:07',
					updatedAt: '2021-01-22 14:41:07',
					business_id: 28,
					user_id: 15,
				},
				{
					review_text:
						'Very cool space with amazing acoustics and lighting. The whole experience is only about 30 minutes...very worthwhile. Our tour guide, Ben, was fantastic and...',
					rating: 5,
					createdAt: '2021-01-10 13:16:15',
					updatedAt: '2021-01-10 13:16:15',
					business_id: 28,
					user_id: 2,
				},
				{
					review_text:
						'We went to Houston for a quick trip with friends and this was definitely the highlight! The tickets were inexpensive, $5 for a 30 minute guided tour. We...',
					rating: 5,
					createdAt: '2020-02-08 21:26:50',
					updatedAt: '2020-02-08 21:26:50',
					business_id: 28,
					user_id: 6,
				},
				{
					review_text:
						"Fantastic facility! Great equipment and staff. Very well maintained. I workout here as a female bodybuilder and do not get bothered; it's a good community...",
					rating: 5,
					createdAt: '2019-08-10 14:01:43',
					updatedAt: '2019-08-10 14:01:43',
					business_id: 29,
					user_id: 17,
				},
				{
					review_text:
						'I had a rather unfortunate experience with Jim Penberthy, Group Maintenance Director, after visiting this club and I would hope that his behavior does not...',
					rating: 1,
					createdAt: '2020-10-23 08:54:04',
					updatedAt: '2020-10-23 08:54:04',
					business_id: 29,
					user_id: 21,
				},
				{
					review_text:
						'I wanted to tell someone about this facility, so I decided to Tell Epsen.\n\nI think you should follow these three steps. (a) do what a Detroit-based rapper...',
					rating: 5,
					createdAt: '2018-06-06 12:00:56',
					updatedAt: '2018-06-06 12:00:56',
					business_id: 29,
					user_id: 13,
				},
				{
					review_text:
						"4/26/2020 would be the 2-year anniversary since I became a Bar Method Houston Montrose client, and my review remains the same, 5 stars!! We're in the middle...",
					rating: 5,
					createdAt: '2020-04-07 17:48:15',
					updatedAt: '2020-04-07 17:48:15',
					business_id: 30,
					user_id: 11,
				},
				{
					review_text:
						'I highly recommend The Bar Method Houston Montrose to anyone and everyone! If you are curious, give it a try! You will not be disappointed. \n\nThis is a...',
					rating: 5,
					createdAt: '2020-04-17 06:52:35',
					updatedAt: '2020-04-17 06:52:35',
					business_id: 30,
					user_id: 1,
				},
				{
					review_text:
						'The Bar Method is a family that when you walk in your a part of. The classes are ever changing and challenging making you look forward to the next class....',
					rating: 5,
					createdAt: '2020-04-20 12:48:59',
					updatedAt: '2020-04-20 12:48:59',
					business_id: 30,
					user_id: 11,
				},
				{
					review_text:
						'I was a member at Yogaleena for over a year and I loved it! The ambience is exactly what one would want from a yoga studio. I always felt so much peace when...',
					rating: 5,
					createdAt: '2020-11-02 14:15:46',
					updatedAt: '2020-11-02 14:15:46',
					business_id: 31,
					user_id: 11,
				},
				{
					review_text:
						'From the first time I experienced Yogaleena, I felt welcome and inspired.\n\nI confess that I dislike "yoga" that channels Buns of Steel classes. That\'s...',
					rating: 5,
					createdAt: '2019-06-08 00:30:18',
					updatedAt: '2019-06-08 00:30:18',
					business_id: 31,
					user_id: 7,
				},
				{
					review_text:
						'Yogaleena is a quaint studio that takes you away from the hustle & bustle of Houston. Carolina is the sweetest and has the most soothing voice. Yogaleena is...',
					rating: 4,
					createdAt: '2019-02-27 09:11:02',
					updatedAt: '2019-02-27 09:11:02',
					business_id: 31,
					user_id: 8,
				},
				{
					review_text:
						'Great open space for picnics on the grass or concrete ! There are also many monuments and statues as well as benches for photography, The parking is free...',
					rating: 5,
					createdAt: '2020-08-20 14:51:27',
					updatedAt: '2020-08-20 14:51:27',
					business_id: 32,
					user_id: 10,
				},
				{
					review_text:
						'Great for a run or ride after work\nFamily time on a sunday to walk\nPlus they have refreshment stands',
					rating: 5,
					createdAt: '2021-03-06 14:46:54',
					updatedAt: '2021-03-06 14:46:54',
					business_id: 32,
					user_id: 19,
				},
				{
					review_text:
						'I love this park. I come here almost daily sometime. So many places to explore. This place rock.',
					rating: 5,
					createdAt: '2021-04-22 20:26:06',
					updatedAt: '2021-04-22 20:26:06',
					business_id: 32,
					user_id: 14,
				},
				{
					review_text:
						'This place and their staff are amazing! During this whole quarantine mess the staff stepped up and made sure people would be able to work out from home....',
					rating: 5,
					createdAt: '2020-06-26 17:24:01',
					updatedAt: '2020-06-26 17:24:01',
					business_id: 33,
					user_id: 8,
				},
				{
					review_text:
						'The gym has every piece of equipment you can imagine. It has a healthy amount of customer traffic, but is never to busy to get time with the equipment you...',
					rating: 5,
					createdAt: '2021-04-09 15:43:52',
					updatedAt: '2021-04-09 15:43:52',
					business_id: 33,
					user_id: 9,
				},
				{
					review_text:
						"I am going to start with a disclaimer; I am not a member of this gym, however, I visit Stefani's barre class frequently using my Class Pass account. My...",
					rating: 5,
					createdAt: '2020-01-21 08:16:22',
					updatedAt: '2020-01-21 08:16:22',
					business_id: 33,
					user_id: 9,
				},
				{
					review_text:
						'Black Swan Yoga Houston is a great yoga studio! As others have mentioned its a donation based studio for their classes, with a recommended donation of...',
					rating: 5,
					createdAt: '2019-09-16 13:16:16',
					updatedAt: '2019-09-16 13:16:16',
					business_id: 34,
					user_id: 8,
				},
				{
					review_text:
						'I started going to Black Swan in the Kirby location first. When I came to this location, it had exactly everything that Kirby was missing. Beautiful windows...',
					rating: 5,
					createdAt: '2019-08-30 01:42:55',
					updatedAt: '2019-08-30 01:42:55',
					business_id: 34,
					user_id: 7,
				},
				{
					review_text:
						'Tried hot yoga for the first time and wow, that was intense! But a good-intense, for sure! I was drowning in sweat by the time we were done but I feel...',
					rating: 5,
					createdAt: '2019-12-18 07:29:09',
					updatedAt: '2019-12-18 07:29:09',
					business_id: 34,
					user_id: 3,
				},
				{
					review_text:
						'"Late Post" 3 stars (came in June)\n(The Aquarium) We came here for our anniversary weekend with our kid. We had to pay full price for only one exhibit being...',
					rating: 3,
					createdAt: '2021-02-03 09:40:20',
					updatedAt: '2021-02-03 09:40:20',
					business_id: 35,
					user_id: 21,
				},
				{
					review_text:
						"I know I always wanted to bring my little one to this spot in Houston.  I made sure to go there as the doors opened, so that I don't have to deal with the...",
					rating: 4,
					createdAt: '2021-03-20 12:47:20',
					updatedAt: '2021-03-20 12:47:20',
					business_id: 35,
					user_id: 17,
				},
				{
					review_text: 'Good place for a quick weekend trip with family, good for kids, they observe social distance.',
					rating: 5,
					createdAt: '2021-04-21 21:02:50',
					updatedAt: '2021-04-21 21:02:50',
					business_id: 35,
					user_id: 14,
				},
				{
					review_text:
						"Like OMG, look at that hatchet... it's like, so.. ratchet.\n\nBut I'm a savage. Classy, maybe. Bougie, not as much as you'd think considering where I'm from....",
					rating: 5,
					createdAt: '2020-12-15 03:55:14',
					updatedAt: '2020-12-15 03:55:14',
					business_id: 36,
					user_id: 12,
				},
				{
					review_text:
						"This was my first time going and I must say it was cool. The venue was very clean and required mask. It's byob which make it cool. They also had games for...",
					rating: 4,
					createdAt: '2020-12-12 11:50:12',
					updatedAt: '2020-12-12 11:50:12',
					business_id: 36,
					user_id: 9,
				},
				{
					review_text:
						"My friends and I came to celebrate a birthday and really enjoyed ourselves! The owner/ instructor was amazing! It was very safe and fun! I'll definitely be...",
					rating: 5,
					createdAt: '2020-12-28 07:55:39',
					updatedAt: '2020-12-28 07:55:39',
					business_id: 36,
					user_id: 15,
				},
				{
					review_text:
						'I have been going to HIP for over 4 years and never have been happier with the results I have seen ever since ! The workout and routine is low impact ,...',
					rating: 5,
					createdAt: '2021-02-04 07:03:06',
					updatedAt: '2021-02-04 07:03:06',
					business_id: 37,
					user_id: 18,
				},
				{
					review_text:
						'Absolutely the best pilates studio in Houston for real results. I am a former fitness instructor and have taken every class out there from Barre to...',
					rating: 5,
					createdAt: '2020-08-28 09:24:48',
					updatedAt: '2020-08-28 09:24:48',
					business_id: 37,
					user_id: 4,
				},
				{
					review_text:
						'I recently visited HIP for their climb class and loved it. The West U location has plenty of parking, very clean and it was a small class so plenty of space...',
					rating: 5,
					createdAt: '2020-12-28 18:12:21',
					updatedAt: '2020-12-28 18:12:21',
					business_id: 37,
					user_id: 19,
				},
				{
					review_text:
						"Fast service and good price.  I have damaged my bike's gear cable while transporting it in the vehicle.  Called in and spoke to Kevin, drop my bike off 15...",
					rating: 5,
					createdAt: '2020-12-05 12:22:20',
					updatedAt: '2020-12-05 12:22:20',
					business_id: 38,
					user_id: 6,
				},
				{
					review_text:
						'Bought my BMX bike here about a year ago and have had nothing but great service at very reasonable prices since then!',
					rating: 5,
					createdAt: '2020-10-24 08:40:24',
					updatedAt: '2020-10-24 08:40:24',
					business_id: 38,
					user_id: 4,
				},
				{
					review_text:
						'Brought my new bike in because the front tire had caught a flat, and wound up leaving with a new tire, new pedals, and new bike grips for just $50 including...',
					rating: 5,
					createdAt: '2020-07-29 15:06:08',
					updatedAt: '2020-07-29 15:06:08',
					business_id: 38,
					user_id: 13,
				},
				{
					review_text:
						"Have been going here since COVID and it has been a blessing for my dogs until today sadly. A woman's large dog attacked me and my maltipoo (who I was...",
					rating: 4,
					createdAt: '2020-07-21 18:41:00',
					updatedAt: '2020-07-21 18:41:00',
					business_id: 39,
					user_id: 15,
				},
				{
					review_text:
						'Does one need to presently be a dog owner to review a dog park?  I think not.  A person just needs to have visited it and done a good job of observing its...',
					rating: 4,
					createdAt: '2020-12-18 16:24:11',
					updatedAt: '2020-12-18 16:24:11',
					business_id: 39,
					user_id: 13,
				},
				{
					review_text:
						"This is my new favorite dog park! I've been to a few around Houston, and I felt like none of them were big enough, besides Johnny Steele. Even though Danny...",
					rating: 5,
					createdAt: '2020-11-03 18:08:07',
					updatedAt: '2020-11-03 18:08:07',
					business_id: 39,
					user_id: 17,
				},
				{
					review_text:
						"Market Square Park is a well known park downtown. It's located to a lot of hot spots, close to Main Street and a bunch of other bars and restaurants. It's...",
					rating: 5,
					createdAt: '2021-01-08 22:21:22',
					updatedAt: '2021-01-08 22:21:22',
					business_id: 40,
					user_id: 4,
				},
				{
					review_text:
						"It's time to market down in our diaries and drive over here and park and explore it.\n\nThis is a lovely little park that takes up one square block in the...",
					rating: 5,
					createdAt: '2021-02-25 15:34:27',
					updatedAt: '2021-02-25 15:34:27',
					business_id: 40,
					user_id: 16,
				},
				{
					review_text:
						'Market Square Park is 12-acre park located in downtown Houston. This one is an urban park complete with activities/events, surrounding restaurants, plenty...',
					rating: 4,
					createdAt: '2020-12-16 12:18:00',
					updatedAt: '2020-12-16 12:18:00',
					business_id: 40,
					user_id: 14,
				},
				{
					review_text:
						"This is my fav workout studio in town!  I have also been to the River Oaks location, and it's great too.  There's also one at West University. \n\nI love the...",
					rating: 5,
					createdAt: '2021-02-01 19:09:50',
					updatedAt: '2021-02-01 19:09:50',
					business_id: 41,
					user_id: 3,
				},
				{
					review_text:
						'Great classes! Natalie is great instructor. I use class pass to book. They have New client specials through mind body app',
					rating: 5,
					createdAt: '2021-01-28 19:04:35',
					updatedAt: '2021-01-28 19:04:35',
					business_id: 41,
					user_id: 1,
				},
				{
					review_text:
						"Convenient scheduling with early morning and late evening hours, and even open on weekends! Of the few Pilates places I've been to, Boost pushes me more and...",
					rating: 5,
					createdAt: '2020-01-06 17:00:17',
					updatedAt: '2020-01-06 17:00:17',
					business_id: 41,
					user_id: 13,
				},
				{
					review_text:
						"This is my fav workout studio in town!  I have also been to the heights location and it's great too. \n\nI love the teachers and workout they curate. Each...",
					rating: 5,
					createdAt: '2021-02-01 19:00:40',
					updatedAt: '2021-02-01 19:00:40',
					business_id: 42,
					user_id: 3,
				},
				{
					review_text:
						'Had a great first experience at Boost pilates studio. Gracie instructed the class and she was very energetic and motivating! She also provided constructive...',
					rating: 5,
					createdAt: '2019-12-12 09:07:47',
					updatedAt: '2019-12-12 09:07:47',
					business_id: 42,
					user_id: 6,
				},
				{
					review_text:
						"Boost Pilates is hands down THE best studio I've been to in Houston! The place is clean and simple, has all the equipment you need, filtered water fountain...",
					rating: 5,
					createdAt: '2019-12-12 19:28:32',
					updatedAt: '2019-12-12 19:28:32',
					business_id: 42,
					user_id: 14,
				},
				{
					review_text:
						'I am new to Houston and I wanted to try out a place that will give me a good workout. I absolutely loved Baby Bull Boxing. The staff is amazing and the...',
					rating: 5,
					createdAt: '2021-03-20 13:41:00',
					updatedAt: '2021-03-20 13:41:00',
					business_id: 43,
					user_id: 1,
				},
				{
					review_text:
						'I extremely recommend Baby Bull! The coaches are the best, friendly and they actually teach you in the classes! I have been coming for three weeks and I can...',
					rating: 5,
					createdAt: '2019-11-19 05:05:34',
					updatedAt: '2019-11-19 05:05:34',
					business_id: 43,
					user_id: 19,
				},
				{
					review_text:
						"I just finished my 6AM work out with Anael! I had an amazing workout and definitely was challenged. \n\nI've tried OT, crossfit, and other gyms, but haven't...",
					rating: 5,
					createdAt: '2020-02-07 05:41:18',
					updatedAt: '2020-02-07 05:41:18',
					business_id: 43,
					user_id: 1,
				},
				{
					review_text:
						'I have been going to Define since 2012. I have taken barre classes all over the country since I am a flight attendant. Define is the BEST hands down. All of...',
					rating: 5,
					createdAt: '2021-02-28 19:04:58',
					updatedAt: '2021-02-28 19:04:58',
					business_id: 44,
					user_id: 5,
				},
				{
					review_text:
						"I enjoy Define since I discovered it when visiting my mom in Houston. I also am a big fan of Kayla's classes, and she teaches at several studios including...",
					rating: 5,
					createdAt: '2020-05-17 12:29:57',
					updatedAt: '2020-05-17 12:29:57',
					business_id: 44,
					user_id: 21,
				},
				{
					review_text:
						'One of the best workout experiences starting at the entrance with the decor including chandeliers in the studio. The instructors are energetic with upbeat...',
					rating: 5,
					createdAt: '2021-04-10 14:10:22',
					updatedAt: '2021-04-10 14:10:22',
					business_id: 44,
					user_id: 11,
				},
				{
					review_text:
						'Enjoyed a lovely late afternoon to evening at Hermann Park Garden Center.\n\nNumerous 2020 graduates put and about taking photos.\n\nMany families enjoying the...',
					rating: 5,
					createdAt: '2020-06-12 21:15:47',
					updatedAt: '2020-06-12 21:15:47',
					business_id: 45,
					user_id: 13,
				},
				{
					review_text:
						"It's hard to imagine a more tranquil place in a warm, calm day. If you can find parking then the rest takes care of itself. Bring bird food if you are into...",
					rating: 5,
					createdAt: '2019-01-04 14:34:22',
					updatedAt: '2019-01-04 14:34:22',
					business_id: 45,
					user_id: 21,
				},
				{
					review_text:
						"If you're visiting Houston this is a MUST SEE park. Right in the hear of the museum district, this park has some beautiful scenes and a great area to take a...",
					rating: 5,
					createdAt: '2019-06-30 21:06:13',
					updatedAt: '2019-06-30 21:06:13',
					business_id: 45,
					user_id: 21,
				},
				{
					review_text:
						'I usually attend the Monday - Thursday 5:30 - 6:00 pm Cardio Kickboxing class and I have been very happy about the structure of the class.  The owner has a...',
					rating: 5,
					createdAt: '2015-11-02 20:12:00',
					updatedAt: '2015-11-02 20:12:00',
					business_id: 46,
					user_id: 15,
				},
				{
					review_text: 'Staff is great and the classes are easy to follow . Will totally tell my friends about it!',
					rating: 5,
					createdAt: '2020-09-09 12:02:10',
					updatedAt: '2020-09-09 12:02:10',
					business_id: 46,
					user_id: 7,
				},
				{
					review_text:
						'With no prior marital art experience, I looked into Muay Thai gyms around Houston, and Heritage Muay Thai has everything you want on paper. High level...',
					rating: 5,
					createdAt: '2019-08-04 07:34:05',
					updatedAt: '2019-08-04 07:34:05',
					business_id: 46,
					user_id: 6,
				},
				{
					review_text:
						'BEST PARK EVER!  This is a great spot for the family to play.  Clean and very well maintained.  All the kids are toddlers and not big kids running around...',
					rating: 5,
					createdAt: '2021-04-19 12:22:25',
					updatedAt: '2021-04-19 12:22:25',
					business_id: 47,
					user_id: 3,
				},
				{
					review_text:
						'Great park, although those managing it in the past were IMO out of touch with others in the community.  A local resident built the spectacular and popular...',
					rating: 4,
					createdAt: '2019-02-24 11:09:41',
					updatedAt: '2019-02-24 11:09:41',
					business_id: 47,
					user_id: 7,
				},
				{
					review_text:
						'Beautiful park! We always bring the kids  here after work. They have  picnic tables, swings, castles, slides, and more! I also heard that they  might be...',
					rating: 5,
					createdAt: '2020-02-21 19:29:10',
					updatedAt: '2020-02-21 19:29:10',
					business_id: 47,
					user_id: 14,
				},
				{
					review_text:
						'This place is awesome!  Great facility and great people!  Wes or Laura are usually at the desk to greet you when you walk in.  All the proper precautions...',
					rating: 5,
					createdAt: '2020-11-25 07:14:52',
					updatedAt: '2020-11-25 07:14:52',
					business_id: 48,
					user_id: 15,
				},
				{
					review_text:
						"By far one of the cleanest businesses/gyms I've been to. They enforce the mask mandate & all the members are very mindful of one another. Support local &...",
					rating: 5,
					createdAt: '2021-02-16 10:41:18',
					updatedAt: '2021-02-16 10:41:18',
					business_id: 48,
					user_id: 15,
				},
				{
					review_text:
						'This is a good location. Very easy to park & walk into the gym nice people working at the front desk made it easy for us to fill out a guest pass. Very nice...',
					rating: 5,
					createdAt: '2020-08-06 09:39:03',
					updatedAt: '2020-08-06 09:39:03',
					business_id: 48,
					user_id: 19,
				},
				{
					review_text:
						'We initially visited Love Dance HTX as a possible rehearsal luncheon venue, and then also ended up signing up for a wedding dance package. This ended up...',
					rating: 5,
					createdAt: '2020-11-02 15:00:08',
					updatedAt: '2020-11-02 15:00:08',
					business_id: 49,
					user_id: 11,
				},
				{
					review_text:
						'I am so grateful we decided to take dance lessons for our wedding. To start off, my husband and I are NOT dancers. We are athletic, and are sometimes...',
					rating: 5,
					createdAt: '2020-10-05 18:52:59',
					updatedAt: '2020-10-05 18:52:59',
					business_id: 49,
					user_id: 4,
				},
				{
					review_text:
						"Bethany was an amazing choreographer for our wedding first dance. I didn't know what to expect but she made it easy and fun to learn everything. We did a...",
					rating: 5,
					createdAt: '2021-04-20 19:44:50',
					updatedAt: '2021-04-20 19:44:50',
					business_id: 49,
					user_id: 15,
				},
				{
					review_text:
						'Thanks to yelper Melissa for your review of Rebecca!  We decided to reach out to Rebecca based off great reviews and found the perfect package to fit our...',
					rating: 5,
					createdAt: '2017-12-06 09:06:03',
					updatedAt: '2017-12-06 09:06:03',
					business_id: 50,
					user_id: 7,
				},
				{
					review_text:
						'If you want to secure yourself in the comfort of looking half way decent during your first dance at your wedding--or at least not look like a complete...',
					rating: 5,
					createdAt: '2016-10-06 15:29:27',
					updatedAt: '2016-10-06 15:29:27',
					business_id: 50,
					user_id: 6,
				},
				{
					review_text:
						'Rebecca was absolutely fantastic - when life slows down (ha!) we want to continue to take lessons from her!  She is patient, breaks things down, covers all...',
					rating: 5,
					createdAt: '2017-01-31 06:41:58',
					updatedAt: '2017-01-31 06:41:58',
					business_id: 50,
					user_id: 19,
				},
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Reviews', null, {});
	},
};
