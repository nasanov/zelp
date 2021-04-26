'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			'Businesses',
			[
				{
					name: 'Hermann Park Conservancy',
					image_url: 'https://s3-media4.fl.yelpcdn.com/bphoto/9XXY87hp94qIPsut8Oeo2Q/o.jpg',
					is_closed: false,
					phone: '+17135245876',
					coordinates: [ '29.7207717', '-95.386382' ],
					photos: [
						'https://s3-media4.fl.yelpcdn.com/bphoto/9XXY87hp94qIPsut8Oeo2Q/o.jpg',
						'https://s3-media1.fl.yelpcdn.com/bphoto/yGcXz4ia0I0uLXh4eLNxXg/o.jpg',
						'https://s3-media4.fl.yelpcdn.com/bphoto/xSZ991JlDKpE3yNnL_Y9iQ/o.jpg'
					],
					hours: '06:00 - 23:00',
					state: 'TX',
					address: '1700 Hermann DrHouston, TX 77004',
					price: '$$$'
				},
				{
					name: 'Discovery Green',
					image_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/x67KJlF22gJ7I27Ydmjsmg/o.jpg',
					is_closed: false,
					phone: '+17134007336',
					coordinates: [ '29.753017766236', '-95.3596012794234' ],
					photos: [
						'https://s3-media1.fl.yelpcdn.com/bphoto/x67KJlF22gJ7I27Ydmjsmg/o.jpg',
						'https://s3-media3.fl.yelpcdn.com/bphoto/BdenA9gz-y-s4UhNdCZ4iA/o.jpg',
						'https://s3-media3.fl.yelpcdn.com/bphoto/uDO9wPocQ3D4hGqKC3csyA/o.jpg'
					],
					hours: '06:00 - 23:00',
					state: 'TX',
					address: '1500 McKinneyHouston, TX 77010',
					price: '$$$'
				},
				{
					name: 'Houston Zoo',
					image_url: 'https://s3-media4.fl.yelpcdn.com/bphoto/_6hPmW68xBczNmxRFlnf_w/o.jpg',
					is_closed: false,
					phone: '+17135336500',
					coordinates: [ '29.714201', '-95.390945' ],
					photos: [
						'https://s3-media4.fl.yelpcdn.com/bphoto/_6hPmW68xBczNmxRFlnf_w/o.jpg',
						'https://s3-media2.fl.yelpcdn.com/bphoto/uZTVwEa_Ai1HTRG-6g3tfQ/o.jpg',
						'https://s3-media3.fl.yelpcdn.com/bphoto/7-E9w3gXIUtI-fgyj5nzxg/o.jpg'
					],
					hours: '06:00 - 23:00',
					state: 'TX',
					address: '6200 Hermann Park DrHouston, TX 77030',
					price: '$$$'
				},
				{
					name: 'Memorial Park',
					image_url: 'https://s3-media3.fl.yelpcdn.com/bphoto/75OxxEDU63Eoa4wBtEwxYg/o.jpg',
					is_closed: false,
					phone: '+17138638403',
					coordinates: [ '29.7725485970032', '-95.4367289434515' ],
					photos: [
						'https://s3-media3.fl.yelpcdn.com/bphoto/75OxxEDU63Eoa4wBtEwxYg/o.jpg',
						'https://s3-media4.fl.yelpcdn.com/bphoto/scPvi6UEifhFiX8IQ5ouEQ/o.jpg',
						'https://s3-media2.fl.yelpcdn.com/bphoto/-r9N4vu-w-nc24p3fOgVnw/o.jpg'
					],
					state: 'TX',
					address: '6501 Memorial DrHouston, TX 77007',
					hours: '06:00 - 23:00',
					price: '$$$'
				},
				{
					name: 'Minute Maid Park',
					image_url: 'https://s3-media4.fl.yelpcdn.com/bphoto/Gi-gRA2avcTCWrX-fC07Vw/o.jpg',
					is_closed: false,
					phone: '+17132598000',
					coordinates: [ '29.757271', '-95.355517' ],
					photos: [
						'https://s3-media4.fl.yelpcdn.com/bphoto/Gi-gRA2avcTCWrX-fC07Vw/o.jpg',
						'https://s3-media2.fl.yelpcdn.com/bphoto/oetsssLrG5FxksXC3hW3Sg/o.jpg',
						'https://s3-media2.fl.yelpcdn.com/bphoto/VT-qfIWmWpjoN0qvrS5xPw/o.jpg'
					],
					hours: '06:00 - 23:00',
					state: 'TX',
					address: '501 Crawford StHouston, TX 77002',
					price: '$$$'
				},
				{
					name: 'Citizen Pilates',
					image_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/tfW5pbNFNftXEazirjPAUg/o.jpg',
					is_closed: false,
					phone: '+17135898777',
					coordinates: [ '29.78734', '-95.37255' ],
					photos: [
						'https://s3-media1.fl.yelpcdn.com/bphoto/tfW5pbNFNftXEazirjPAUg/o.jpg',
						'https://s3-media1.fl.yelpcdn.com/bphoto/bbF8Z4qEoe3CuXP95N9mFA/o.jpg',
						'https://s3-media3.fl.yelpcdn.com/bphoto/Lr4YPf75vJM0ID57PouDrg/o.jpg'
					],
					hours: '06:00 - 23:00',
					state: 'TX',
					address: '3217 Houston AveHouston, TX 77009',
					price: '$$$'
				},
				{
					name: 'Buffalo Bayou Park',
					image_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/4V9uT8oWR4rN25gd98P7Yg/o.jpg',
					is_closed: false,
					phone: '+17137520314',
					coordinates: [ '29.763093716609603', '-95.37614818220881' ],
					photos: [
						'https://s3-media1.fl.yelpcdn.com/bphoto/4V9uT8oWR4rN25gd98P7Yg/o.jpg',
						'https://s3-media1.fl.yelpcdn.com/bphoto/c4stdgt6KxND_H_F2Y-7nA/o.jpg',
						'https://s3-media2.fl.yelpcdn.com/bphoto/f-IdmBDl-uysminl3cxEDg/o.jpg'
					],
					hours: '06:00 - 23:00',
					state: 'TX',
					address: '105 Sabine StHouston, TX 77007',
					price: '$$$'
				},
				{
					name: 'The GYM',
					image_url: 'https://s3-media2.fl.yelpcdn.com/bphoto/zQEre_Iuy8rO3XwXSCaJOg/o.jpg',
					is_closed: false,
					phone: '+17135278000',
					coordinates: [ '29.753828', '-95.406252' ],
					photos: [
						'https://s3-media2.fl.yelpcdn.com/bphoto/zQEre_Iuy8rO3XwXSCaJOg/o.jpg',
						'https://s3-media3.fl.yelpcdn.com/bphoto/zIe1zSXOzA0au4-8anufGg/o.jpg',
						'https://s3-media2.fl.yelpcdn.com/bphoto/ZruINzztZg-4IpwgULq1rQ/o.jpg'
					],
					hours: '06:00 - 23:00',
					state: 'TX',
					address: '1950 W Gray StSte 6Houston, TX 77019',
					price: '$$$'
				},
				{
					name: 'Escape Hunt Houston',
					image_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/1PutYl5yqy6To7KomJG4NA/o.jpg',
					is_closed: false,
					phone: '+13462409111',
					coordinates: [ '29.753111', '-95.379767' ],
					photos: [
						'https://s3-media1.fl.yelpcdn.com/bphoto/1PutYl5yqy6To7KomJG4NA/o.jpg',
						'https://s3-media1.fl.yelpcdn.com/bphoto/Ow4Zv_4CsWrdAVKKNoyRaA/o.jpg',
						'https://s3-media2.fl.yelpcdn.com/bphoto/hge_dv6JodcYEKYheuVjfQ/o.jpg'
					],
					hours: '06:00 - 23:00',
					state: 'TX',
					address: '125 W Gray StSte 100Houston, TX 77019',
					price: '$$$'
				},
				{
					name: 'Citizen Pilates',
					image_url: 'https://s3-media3.fl.yelpcdn.com/bphoto/3eObc9su6sahPjiIHBSs6Q/o.jpg',
					is_closed: false,
					phone: '+17135898777',
					coordinates: [ '29.7886087539624', '-95.3972795405326' ],
					photos: [
						'https://s3-media3.fl.yelpcdn.com/bphoto/3eObc9su6sahPjiIHBSs6Q/o.jpg',
						'https://s3-media2.fl.yelpcdn.com/bphoto/fcT953iaCmAMQdyL93e4eQ/o.jpg',
						'https://s3-media2.fl.yelpcdn.com/bphoto/8OgDxn1SKgPQEAVGDVj3RQ/o.jpg'
					],
					hours: '06:00 - 23:00',
					state: 'TX',
					address: '940 Heights BlvdHouston, TX 77008',
					price: '$$$'
				},
				{
					name: 'Strange Bird Immersive',
					image_url: 'https://s3-media2.fl.yelpcdn.com/bphoto/aEF8le1jJdBwlGWPJMiBfQ/o.jpg',
					is_closed: false,
					phone: '+18324132853',
					coordinates: [ '29.7856286', '-95.4454596' ],
					photos: [
						'https://s3-media2.fl.yelpcdn.com/bphoto/aEF8le1jJdBwlGWPJMiBfQ/o.jpg',
						'https://s3-media1.fl.yelpcdn.com/bphoto/ShVsvKk_9vNS0KWx1R3QUw/o.jpg',
						'https://s3-media4.fl.yelpcdn.com/bphoto/SbAKanOSywC7Jl8j6Gwv5A/o.jpg'
					],
					hours: '06:00 - 23:00',
					state: 'TX',
					address: '7026 Old Katy RdSte 310Houston, TX 77024',
					price: '$$$'
				},
				{
					name: 'Inner Me Studios',
					image_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/r9hSJNYWSukK_YJHcUWCmA/o.jpg',
					is_closed: false,
					phone: '+17135331455',
					coordinates: [ '29.7405518', '-95.3604669' ],
					photos: [
						'https://s3-media1.fl.yelpcdn.com/bphoto/r9hSJNYWSukK_YJHcUWCmA/o.jpg',
						'https://s3-media3.fl.yelpcdn.com/bphoto/AnRQBGXpBaVWWPwFbIQxEA/o.jpg',
						'https://s3-media2.fl.yelpcdn.com/bphoto/NRezRQWuUlkzRZFZAmmjOA/o.jpg'
					],
					hours: '06:00 - 23:00',
					state: 'TX',
					address: '2206 Emancipation AveHouston, TX 77003',
					price: '$$$'
				},
				{
					name: 'BIG Power Yoga',
					image_url: 'https://s3-media2.fl.yelpcdn.com/bphoto/Z2YpOzbVmjm8CyoFLv6wnQ/o.jpg',
					is_closed: false,
					phone: '+18322910977',
					coordinates: [ '29.814821', '-95.461005' ],
					photos: [
						'https://s3-media2.fl.yelpcdn.com/bphoto/Z2YpOzbVmjm8CyoFLv6wnQ/o.jpg',
						'https://s3-media3.fl.yelpcdn.com/bphoto/wyWABXlKHmQSxfOA0QhyVg/o.jpg',
						'https://s3-media2.fl.yelpcdn.com/bphoto/gKwty0LpDY0pYzsEu_NVBA/o.jpg'
					],
					hours: '06:00 - 23:00',
					state: 'TX',
					address: 'Houston, TX 77055',
					price: '$$$'
				},
				{
					name: 'Republic Aerial Yoga',
					image_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/T6FqX32EasR0pduAxdXuBw/o.jpg',
					is_closed: false,
					phone: '+17138512773',
					coordinates: [ '29.77027', '-95.37189' ],
					photos: [
						'https://s3-media1.fl.yelpcdn.com/bphoto/T6FqX32EasR0pduAxdXuBw/o.jpg',
						'https://s3-media1.fl.yelpcdn.com/bphoto/jOUHBGj1aOBDWFSM-8fPwA/o.jpg',
						'https://s3-media1.fl.yelpcdn.com/bphoto/4bnGaks5TcWAenSfO9ZUvA/o.jpg'
					],
					hours: '06:00 - 23:00',
					state: 'TX',
					address: '1302 Houston AveSte 600Houston, TX 77007',
					price: '$$$'
				},
				{
					name: 'Escape The Room Texas',
					image_url: 'https://s3-media3.fl.yelpcdn.com/bphoto/DoSd0hok7gPtzWdXwROzEg/o.jpg',
					is_closed: false,
					phone: '+18327868822',
					coordinates: [ '29.7421', '-95.38' ],
					photos: [
						'https://s3-media3.fl.yelpcdn.com/bphoto/DoSd0hok7gPtzWdXwROzEg/o.jpg',
						'https://s3-media3.fl.yelpcdn.com/bphoto/ep_PGlTqJK0xQZj3wvddpQ/o.jpg',
						'https://s3-media3.fl.yelpcdn.com/bphoto/Wab-92tbntRLVgiztzQ5SQ/o.jpg'
					],
					hours: '06:00 - 23:00',
					state: 'TX',
					address: '3303 LouisianaSte 220Houston, TX 77006',
					price: '$$$'
				},
				{
					name: 'Levy Park',
					image_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/c8SB9vWp4YOqcAEMr9KlnA/o.jpg',
					is_closed: false,
					phone: '+17135227275',
					coordinates: [ '29.732747', '-95.423811' ],
					photos: [
						'https://s3-media1.fl.yelpcdn.com/bphoto/c8SB9vWp4YOqcAEMr9KlnA/o.jpg',
						'https://s3-media2.fl.yelpcdn.com/bphoto/vKTFF8ziUwdu49IIEbczXg/o.jpg',
						'https://s3-media3.fl.yelpcdn.com/bphoto/VsAAZKTclbaSuq-Va8G3cw/o.jpg'
					],
					state: 'TX',
					address: '3801 Eastside StHouston, TX 77098',
					hours: '06:00 - 23:00',
					price: '$$$'
				},
				{
					name: 'Body Rock Pilates',
					image_url: 'https://s3-media2.fl.yelpcdn.com/bphoto/J0IKVCu5SWs2-zY2qzqsUA/o.jpg',
					is_closed: false,
					phone: '+17138121272',
					coordinates: [ '29.818572', '-95.436092' ],
					photos: [
						'https://s3-media2.fl.yelpcdn.com/bphoto/J0IKVCu5SWs2-zY2qzqsUA/o.jpg',
						'https://s3-media1.fl.yelpcdn.com/bphoto/Bo4BEE-WNPhCFqc9v5hBpg/o.jpg',
						'https://s3-media1.fl.yelpcdn.com/bphoto/KTZsyUvJ0de1TXdOhKh71Q/o.jpg'
					],
					hours: '06:00 - 23:00',
					state: 'TX',
					address: '3502 Oak Forest DrHouston, TX 77018',
					price: '$$$'
				},
				{
					name: 'Revolution Studio',
					image_url: 'https://s3-media4.fl.yelpcdn.com/bphoto/sGKLs5P7W0u1af1wzopB5A/o.jpg',
					is_closed: false,
					phone: '+17139420082',
					coordinates: [ '29.7411709', '-95.4194565' ],
					photos: [
						'https://s3-media4.fl.yelpcdn.com/bphoto/sGKLs5P7W0u1af1wzopB5A/o.jpg',
						'https://s3-media1.fl.yelpcdn.com/bphoto/EmEoZ5j84P3FOvTJ7FYf-A/o.jpg',
						'https://s3-media1.fl.yelpcdn.com/bphoto/m05nPKYxYFZAFu7L2h865w/o.jpg'
					],
					hours: '06:00 - 23:00',
					state: 'TX',
					address: '2800 Kirby DrSte A-220Houston, TX 77098',
					price: '$$$'
				},
				{
					name: 'Washington Gym',
					image_url: 'https://s3-media4.fl.yelpcdn.com/bphoto/JO6CJVhBkfSBU4ElWZk8cQ/o.jpg',
					is_closed: false,
					phone: '+17134932566',
					coordinates: [ '29.7676948', '-95.3775281' ],
					photos: [
						'https://s3-media4.fl.yelpcdn.com/bphoto/JO6CJVhBkfSBU4ElWZk8cQ/o.jpg',
						'https://s3-media3.fl.yelpcdn.com/bphoto/jdFpFn168Jw0_d8xHZVO_g/o.jpg',
						'https://s3-media2.fl.yelpcdn.com/bphoto/0JCYGobTq7LL1pESGP0AYQ/o.jpg'
					],
					hours: '06:00 - 23:00',
					state: 'TX',
					address: '1925 Washington AveHouston, TX 77007',
					price: '$$$'
				},
				{
					name: 'CrossFit H-Town',
					image_url: 'https://s3-media2.fl.yelpcdn.com/bphoto/SwnwHzWmTyhNsOcFwg0adA/o.jpg',
					is_closed: false,
					phone: '+18328330500',
					coordinates: [ '29.7745824', '-95.3770562' ],
					photos: [
						'https://s3-media2.fl.yelpcdn.com/bphoto/SwnwHzWmTyhNsOcFwg0adA/o.jpg',
						'https://s3-media2.fl.yelpcdn.com/bphoto/KoUanIzuJZDAZCXgYxt22Q/o.jpg',
						'https://s3-media2.fl.yelpcdn.com/bphoto/EjG0pV6PmzeU7tYeu1b5hg/o.jpg'
					],
					hours: '06:00 - 23:00',
					state: 'TX',
					address: '1919 Silver StHouston, TX 77007',
					price: '$$$'
				},
				{
					name: 'Houston Arboretum & Nature Center',
					image_url: 'https://s3-media2.fl.yelpcdn.com/bphoto/fvZKa8NpImoayJT8pMpVAg/o.jpg',
					is_closed: false,
					phone: '+17136818433',
					coordinates: [ '29.765204', '-95.452061' ],
					photos: [
						'https://s3-media2.fl.yelpcdn.com/bphoto/fvZKa8NpImoayJT8pMpVAg/o.jpg',
						'https://s3-media1.fl.yelpcdn.com/bphoto/Bl6ad-GXdzi24LsLp1Mofw/o.jpg',
						'https://s3-media2.fl.yelpcdn.com/bphoto/eovLcJ0xlyQSrRHo3-MYUg/o.jpg'
					],
					hours: '06:00 - 23:00',
					state: 'TX',
					address: '4501 Woodway DrHouston, TX 77024',
					price: '$$$'
				},
				{
					name: 'McGovern Centennial Gardens',
					image_url: 'https://s3-media3.fl.yelpcdn.com/bphoto/tiToMINtgdWt6I8xEpDxOA/o.jpg',
					is_closed: false,
					phone: '+17135245876',
					coordinates: [ '29.72082', '-95.38572' ],
					photos: [
						'https://s3-media3.fl.yelpcdn.com/bphoto/tiToMINtgdWt6I8xEpDxOA/o.jpg',
						'https://s3-media2.fl.yelpcdn.com/bphoto/XGK6tmbsSa73hJefyOHlcA/o.jpg',
						'https://s3-media3.fl.yelpcdn.com/bphoto/iv4yHXott7UQju2_HFo_0w/o.jpg'
					],
					hours: '06:00 - 23:00',
					state: 'TX',
					address: '1700 Hermann DrHouston, TX 77030',
					price: '$$$'
				},
				{
					name: 'RYDE',
					image_url: 'https://s3-media2.fl.yelpcdn.com/bphoto/bZzYFYtN-RgFzIwpTvbOvA/o.jpg',
					is_closed: false,
					phone: '+18325812878',
					coordinates: [ '29.75264', '-95.40894' ],
					photos: [
						'https://s3-media2.fl.yelpcdn.com/bphoto/bZzYFYtN-RgFzIwpTvbOvA/o.jpg',
						'https://s3-media2.fl.yelpcdn.com/bphoto/6qMVXoFjQG4QUKzcGZyZbQ/o.jpg',
						'https://s3-media2.fl.yelpcdn.com/bphoto/YOt47RW-2jUiB5MNB8mnQw/o.jpg'
					],
					hours: '06:00 - 23:00',
					state: 'TX',
					address: '2005 West GraySte DHouston, TX 77019',
					price: '$$$'
				},
				{
					name: 'Project Panic - Houston',
					image_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/pj3T8NqyFIGbJucGhNr0iw/o.jpg',
					is_closed: false,
					phone: '+17139090288',
					coordinates: [ '29.739524', '-95.379271' ],
					photos: [
						'https://s3-media1.fl.yelpcdn.com/bphoto/pj3T8NqyFIGbJucGhNr0iw/o.jpg',
						'https://s3-media3.fl.yelpcdn.com/bphoto/FJrArHLJkG_XiPFA93meWw/o.jpg',
						'https://s3-media1.fl.yelpcdn.com/bphoto/nLjq2y-_2o_iFiGdzAp3Bw/o.jpg'
					],
					hours: '06:00 - 23:00',
					state: 'TX',
					address: '3510 Main StSte CHouston, TX 77002',
					price: '$$$'
				},
				{
					name: 'Smither Park',
					image_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/RgdW59P6cxMzfnAwmYAhpA/o.jpg',
					is_closed: false,
					phone: '+17139266368',
					coordinates: [ '29.7168', '-95.324539' ],
					photos: [
						'https://s3-media1.fl.yelpcdn.com/bphoto/RgdW59P6cxMzfnAwmYAhpA/o.jpg',
						'https://s3-media3.fl.yelpcdn.com/bphoto/5fjTG5UNvrPJJCiBy3Qsug/o.jpg',
						'https://s3-media1.fl.yelpcdn.com/bphoto/uLpHSZwD71EprXigdFcetQ/o.jpg'
					],
					state: 'TX',
					address: '2402 MungerHouston, TX 77023',
					hours: '06:00 - 23:00',
					price: '$$$'
				},
				{
					name: 'RIDE Indoor Cycling',
					image_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/vXy2CXKwnEB2_2iIbyMngA/o.jpg',
					is_closed: false,
					phone: '+12818889772',
					coordinates: [ '29.80253', '-95.40783' ],
					photos: [
						'https://s3-media1.fl.yelpcdn.com/bphoto/vXy2CXKwnEB2_2iIbyMngA/o.jpg',
						'https://s3-media3.fl.yelpcdn.com/bphoto/xMqZc0LtR7N0NhR5hPoZDg/o.jpg',
						'https://s3-media3.fl.yelpcdn.com/bphoto/x6GzzKPh_P75GdvBO0ErmQ/o.jpg'
					],
					state: 'TX',
					address: '548B W 19th StHouston, TX 77008',
					hours: '06:00 - 23:00',
					price: '$$$'
				},
				{
					name: 'BON Running Club',
					image_url: 'https://s3-media2.fl.yelpcdn.com/bphoto/ZqMONyYTaAiRebSA9Tf2gg/o.jpg',
					is_closed: false,
					phone: '',
					coordinates: [ '29.71628', '-95.41465' ],
					photos: [
						'https://s3-media2.fl.yelpcdn.com/bphoto/ZqMONyYTaAiRebSA9Tf2gg/o.jpg',
						'https://s3-media4.fl.yelpcdn.com/bphoto/YaGVqKGgdcTdaNxxlpB9Cg/o.jpg',
						'https://s3-media1.fl.yelpcdn.com/bphoto/6MtbgO-GYbFKL2ufqHHYpQ/o.jpg'
					],
					state: 'TX',
					address: '5555 Morningside DrHouston, TX 77005',
					hours: '06:00 - 23:00',
					price: '$$$'
				},
				{
					name: 'Buffalo Bayou Park Cistern',
					image_url: 'https://s3-media3.fl.yelpcdn.com/bphoto/ky_iT63ZTwhhzideHmeUoA/o.jpg',
					is_closed: false,
					phone: '+17137520314',
					coordinates: [ '29.762767791748', '-95.3776092529297' ],
					photos: [
						'https://s3-media3.fl.yelpcdn.com/bphoto/ky_iT63ZTwhhzideHmeUoA/o.jpg',
						'https://s3-media1.fl.yelpcdn.com/bphoto/cECUsPiybs-wnwiqAZrDNw/o.jpg',
						'https://s3-media3.fl.yelpcdn.com/bphoto/qJcsBhbER1228vhEcl71tQ/o.jpg'
					],
					hours: '06:00 - 23:00',
					state: 'TX',
					address: '105 Sabine StHouston, TX 77007',
					price: '$$$'
				},
				{
					name: 'Tellepsen Family Downtown YMCA',
					image_url: 'https://s3-media4.fl.yelpcdn.com/bphoto/3iPKtgi4QhfSlwckMVDmiQ/o.jpg',
					is_closed: false,
					phone: '+17136598501',
					coordinates: [ '29.75237', '-95.37055' ],
					photos: [
						'https://s3-media4.fl.yelpcdn.com/bphoto/3iPKtgi4QhfSlwckMVDmiQ/o.jpg',
						'https://s3-media2.fl.yelpcdn.com/bphoto/0gv_CRG-YyFKWRDqKleRkA/o.jpg',
						'https://s3-media1.fl.yelpcdn.com/bphoto/JsPzP9vwjdlpcQ_7UdBssA/o.jpg'
					],
					hours: '06:00 - 23:00',
					state: 'TX',
					address: '808 PeaseHouston, TX 77002',
					price: '$$$'
				},
				{
					name: 'The Bar Method',
					image_url: 'https://s3-media3.fl.yelpcdn.com/bphoto/AApoqFIXSoZlx20IvWHtrA/o.jpg',
					is_closed: false,
					phone: '+17134855399',
					coordinates: [ '29.744182', '-95.387548' ],
					photos: [
						'https://s3-media3.fl.yelpcdn.com/bphoto/AApoqFIXSoZlx20IvWHtrA/o.jpg',
						'https://s3-media3.fl.yelpcdn.com/bphoto/C3d2_eRmBSWuzmn9ONAFvQ/o.jpg',
						'https://s3-media2.fl.yelpcdn.com/bphoto/LbGblME9zGc03rgeMXilTw/o.jpg'
					],
					hours: '06:00 - 23:00',
					state: 'TX',
					address: '503 Westheimer RdHouston, TX 77006',
					price: '$$$'
				},
				{
					name: 'Yogaleena Studio',
					image_url: 'https://s3-media4.fl.yelpcdn.com/bphoto/IL_fj0oPx_0AMrnS_OCxDg/o.jpg',
					is_closed: false,
					phone: '+18327673843',
					coordinates: [ '29.741505', '-95.4106051' ],
					photos: [
						'https://s3-media4.fl.yelpcdn.com/bphoto/IL_fj0oPx_0AMrnS_OCxDg/o.jpg',
						'https://s3-media4.fl.yelpcdn.com/bphoto/dDJrnikukd1jI0ZYRcDF3g/o.jpg',
						'https://s3-media3.fl.yelpcdn.com/bphoto/_4WwwLb7ALDdcrCoPhk2HA/o.jpg'
					],
					hours: '06:00 - 23:00',
					state: 'TX',
					address: '2621 S ShepherdSte 230Houston, TX 77098',
					price: '$$$'
				},
				{
					name: 'Hermann Park Trail',
					image_url: 'https://s3-media2.fl.yelpcdn.com/bphoto/tgeYSTyO6FgM223LBekU-w/o.jpg',
					is_closed: false,
					phone: '',
					coordinates: [ '29.7139435', '-95.382164' ],
					photos: [
						'https://s3-media2.fl.yelpcdn.com/bphoto/tgeYSTyO6FgM223LBekU-w/o.jpg',
						'https://s3-media3.fl.yelpcdn.com/bphoto/dqvVYK1v-8VAspj6GMB-Ig/o.jpg',
						'https://s3-media4.fl.yelpcdn.com/bphoto/IF7BkktVctrGLpyJ11s8lg/o.jpg'
					],
					state: 'TX',
					address: '2145-2155 N Macgregor WayHouston, TX 77004',
					hours: '06:00 - 23:00',
					price: '$$$'
				},
				{
					name: 'Facet Seven Heights',
					image_url: 'https://s3-media4.fl.yelpcdn.com/bphoto/xAKpYZw2h7l-viLNPo0SwQ/o.jpg',
					is_closed: false,
					phone: '+17139071276',
					coordinates: [ '29.8066464', '-95.4085996' ],
					photos: [
						'https://s3-media4.fl.yelpcdn.com/bphoto/xAKpYZw2h7l-viLNPo0SwQ/o.jpg',
						'https://s3-media1.fl.yelpcdn.com/bphoto/Em2FhQbYmvbKFNgyxKiPDA/o.jpg',
						'https://s3-media4.fl.yelpcdn.com/bphoto/1rO9Yo3knzjr9lbxgVvosg/o.jpg'
					],
					hours: '06:00 - 23:00',
					state: 'TX',
					address: '2215 Lawrence StHouston, TX 77008',
					price: '$$$'
				},
				{
					name: 'Black Swan Yoga Houston',
					image_url: 'https://s3-media3.fl.yelpcdn.com/bphoto/zj352dFx9bRA8j4-Tma_6g/o.jpg',
					is_closed: false,
					phone: '+17136405060',
					coordinates: [ '29.7816649', '-95.3925887' ],
					photos: [
						'https://s3-media3.fl.yelpcdn.com/bphoto/zj352dFx9bRA8j4-Tma_6g/o.jpg',
						'https://s3-media1.fl.yelpcdn.com/bphoto/oHsy8su0nZviy8vxTFkg_A/o.jpg',
						'https://s3-media2.fl.yelpcdn.com/bphoto/57OvU1UvtCEdA7DAsKDAnw/o.jpg'
					],
					hours: '06:00 - 23:00',
					state: 'TX',
					address: '3210 White Oak DrHouston, TX 77007',
					price: '$$$'
				},
				{
					name: 'Downtown Aquarium',
					image_url: 'https://s3-media4.fl.yelpcdn.com/bphoto/CkXOpbSUwWZ981AnyhU24Q/o.jpg',
					is_closed: false,
					phone: '+17132233474',
					coordinates: [ '29.7642702707008', '-95.3673791885376' ],
					photos: [
						'https://s3-media4.fl.yelpcdn.com/bphoto/CkXOpbSUwWZ981AnyhU24Q/o.jpg',
						'https://s3-media1.fl.yelpcdn.com/bphoto/HAttXCBCOQfFjkykK4RDcQ/o.jpg',
						'https://s3-media1.fl.yelpcdn.com/bphoto/gm2tKg8RwWbXTuyhTy0cSA/o.jpg'
					],
					price: '$$$',
					hours: '06:00 - 23:00',
					state: 'TX',
					address: '410 Bagby StHouston, TX 77002'
				},
				{
					name: 'Ratchet Hatchet Houston',
					image_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/lsVoXJrkJDkOwx9Gicyw8w/o.jpg',
					is_closed: false,
					phone: '+17134468186',
					coordinates: [ '29.76035', '-95.39863' ],
					photos: [
						'https://s3-media1.fl.yelpcdn.com/bphoto/lsVoXJrkJDkOwx9Gicyw8w/o.jpg',
						'https://s3-media3.fl.yelpcdn.com/bphoto/1HUTl7XH9OVEQK7HOw2PRg/o.jpg',
						'https://s3-media4.fl.yelpcdn.com/bphoto/A_0PUQ-vBPBfeiNXp030QQ/o.jpg'
					],
					hours: '06:00 - 23:00',
					state: 'TX',
					address: '524 Waugh DrHouston, TX 77019',
					price: '$$$'
				},
				{
					name: 'Hip Fitness',
					image_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/trfEYFq4ug-i5J7es_3Liw/o.jpg',
					is_closed: false,
					phone: '+18325403138',
					coordinates: [ '29.7074258300935', '-95.4123648855507' ],
					photos: [
						'https://s3-media1.fl.yelpcdn.com/bphoto/trfEYFq4ug-i5J7es_3Liw/o.jpg',
						'https://s3-media4.fl.yelpcdn.com/bphoto/9k73Dr5MiOxau3hvQFsrhA/o.jpg',
						'https://s3-media4.fl.yelpcdn.com/bphoto/YRPxWZzwX94TEAfA0RxvEQ/o.jpg'
					],
					hours: '06:00 - 23:00',
					state: 'TX',
					address: '2294 W Holcombe BlvdHouston, TX 77005',
					price: '$$$'
				},
				{
					name: 'Fletcher Bike Studio',
					image_url: 'https://s3-media2.fl.yelpcdn.com/bphoto/zLMe3t8-Xuu14CfVcSMehA/o.jpg',
					is_closed: false,
					phone: '+18324879650',
					coordinates: [ '29.7480226', '-95.3858921' ],
					photos: [
						'https://s3-media2.fl.yelpcdn.com/bphoto/zLMe3t8-Xuu14CfVcSMehA/o.jpg',
						'https://s3-media4.fl.yelpcdn.com/bphoto/jnvFiCrqWkVn5DYkg_ehow/o.jpg',
						'https://s3-media2.fl.yelpcdn.com/bphoto/gMise8oRaHrxSz5ol1YSzg/o.jpg'
					],
					price: '$$$',
					hours: '06:00 - 23:00',
					state: 'TX',
					address: '2404 Taft StHouston, TX 77006'
				},
				{
					name: 'Danny Jackson Dog Park',
					image_url: 'https://s3-media4.fl.yelpcdn.com/bphoto/0xUAcOtKlFHDAHm6qUYbRA/o.jpg',
					is_closed: false,
					phone: '+12814962177',
					coordinates: [ '29.72531', '-95.45499' ],
					photos: [
						'https://s3-media4.fl.yelpcdn.com/bphoto/0xUAcOtKlFHDAHm6qUYbRA/o.jpg',
						'https://s3-media2.fl.yelpcdn.com/bphoto/MFGGo5jYjLA9RAaNqM04hg/o.jpg',
						'https://s3-media1.fl.yelpcdn.com/bphoto/e7KbZGgia9XZEkWwoHA31A/o.jpg'
					],
					hours: '06:00 - 23:00',
					state: 'TX',
					address: '4828 1/2 Loop Central DrHouston, TX 77081',
					price: '$$$'
				},
				{
					name: 'Market Square Park',
					image_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/xs-N4Fs4lc7TqOJBS7ftCQ/o.jpg',
					is_closed: false,
					phone: '',
					coordinates: [ '29.7628010517868', '-95.3625711326828' ],
					photos: [
						'https://s3-media1.fl.yelpcdn.com/bphoto/xs-N4Fs4lc7TqOJBS7ftCQ/o.jpg',
						'https://s3-media1.fl.yelpcdn.com/bphoto/L7aQzTZsVCm-KQHKYRJNTw/o.jpg',
						'https://s3-media4.fl.yelpcdn.com/bphoto/6tS3FNwAggMTXdyY-RDRJw/o.jpg'
					],
					hours: '06:00 - 23:00',
					state: 'TX',
					address: '301 Milam StHouston, TX 77002',
					price: '$$$'
				},
				{
					name: 'Boost Pilates The Heights',
					image_url: 'https://s3-media2.fl.yelpcdn.com/bphoto/sHYxjp4ScgnJR1i0IZexgQ/o.jpg',
					is_closed: false,
					phone: '+15127666651',
					coordinates: [ '29.77742', '-95.39695' ],
					photos: [
						'https://s3-media2.fl.yelpcdn.com/bphoto/sHYxjp4ScgnJR1i0IZexgQ/o.jpg',
						'https://s3-media4.fl.yelpcdn.com/bphoto/I-r7AGPj5u_KPFXHibon9w/o.jpg',
						'https://s3-media2.fl.yelpcdn.com/bphoto/gg-Cmrtk2lIBkhfTO2uN-A/o.jpg'
					],
					hours: '06:00 - 23:00',
					state: 'TX',
					address: '3620 Katy FwySte AHouston, TX 77007',
					price: '$$$'
				},
				{
					name: 'Boost Pilates River Oaks',
					image_url: 'https://s3-media2.fl.yelpcdn.com/bphoto/BSsKsC6t31-m-M2h7bj6PA/o.jpg',
					is_closed: false,
					phone: '+15127666651',
					coordinates: [ '29.75755', '-95.40197' ],
					photos: [
						'https://s3-media2.fl.yelpcdn.com/bphoto/BSsKsC6t31-m-M2h7bj6PA/o.jpg',
						'https://s3-media3.fl.yelpcdn.com/bphoto/CCo1JG1sdIdsjVY4n-EOgg/o.jpg',
						'https://s3-media3.fl.yelpcdn.com/bphoto/eH9KqgAv0emlNE01NoA_ag/o.jpg'
					],
					hours: '06:00 - 23:00',
					state: 'TX',
					address: '3339 W Lamar StSte 100BHouston, TX 77019',
					price: '$$$'
				},
				{
					name: 'Baby Bull Boxing',
					image_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/s3Eq71dxp0HlZWAnkNPRUA/o.jpg',
					is_closed: false,
					phone: '+18329683343',
					coordinates: [ '29.76881', '-95.4085' ],
					photos: [
						'https://s3-media1.fl.yelpcdn.com/bphoto/s3Eq71dxp0HlZWAnkNPRUA/o.jpg',
						'https://s3-media3.fl.yelpcdn.com/bphoto/GxkeA_NsuGHS54HOQu9bYg/o.jpg',
						'https://s3-media4.fl.yelpcdn.com/bphoto/o_bj7vQWTCDIwcpyk7RQ9g/o.jpg'
					],
					hours: '06:00 - 23:00',
					state: 'TX',
					address: '4701 Rose StHouston, TX 77007',
					price: '$$$'
				},
				{
					name: 'DEFINE body & mind',
					image_url: 'https://s3-media3.fl.yelpcdn.com/bphoto/xBjAaB47QrpjS9VPazjfBw/o.jpg',
					is_closed: false,
					phone: '+17135235800',
					coordinates: [ '29.743159', '-95.405199' ],
					photos: [
						'https://s3-media3.fl.yelpcdn.com/bphoto/xBjAaB47QrpjS9VPazjfBw/o.jpg',
						'https://s3-media2.fl.yelpcdn.com/bphoto/rxfK1sH9uk-rx0JXtgYN_g/o.jpg',
						'https://s3-media3.fl.yelpcdn.com/bphoto/k_VIVjIEtucXTAXfK8xlTQ/o.jpg'
					],
					hours: '06:00 - 23:00',
					state: 'TX',
					address: '2515 MorseHouston, TX 77019',
					price: '$$$'
				},
				{
					name: 'Hermann Park Garden Center',
					image_url: 'https://s3-media2.fl.yelpcdn.com/bphoto/tu3PsLTwIxkxH9pxXWK5Rw/o.jpg',
					is_closed: false,
					phone: '+17132841989',
					coordinates: [ '29.7215991', '-95.3870088' ],
					photos: [
						'https://s3-media2.fl.yelpcdn.com/bphoto/tu3PsLTwIxkxH9pxXWK5Rw/o.jpg',
						'https://s3-media3.fl.yelpcdn.com/bphoto/eIifleVzeitEB5Kk_aVEGw/o.jpg',
						'https://s3-media3.fl.yelpcdn.com/bphoto/vT6IOV8Xl1pqIPq5I95FQA/o.jpg'
					],
					state: 'TX',
					address: '1500 Hermann DrHouston, TX 77004',
					hours: '06:00 - 23:00',
					price: '$$$'
				},
				{
					name: 'Heritage Muay Thai',
					image_url: 'https://s3-media3.fl.yelpcdn.com/bphoto/O-LgDJWGhlog8MjhLZeJ_w/o.jpg',
					is_closed: false,
					phone: '+18323266453',
					coordinates: [ '29.8178449', '-95.426872' ],
					photos: [
						'https://s3-media3.fl.yelpcdn.com/bphoto/O-LgDJWGhlog8MjhLZeJ_w/o.jpg',
						'https://s3-media4.fl.yelpcdn.com/bphoto/y1DrYLIXs0tHeCzkbtAzuA/o.jpg',
						'https://s3-media2.fl.yelpcdn.com/bphoto/XwcTCUehwsGysXzzasSA3g/o.jpg'
					],
					hours: '06:00 - 23:00',
					state: 'TX',
					address: '1604 W 34th StHouston, TX 77018',
					price: '$$$'
				},
				{
					name: 'Donovan Park',
					image_url: 'https://s3-media3.fl.yelpcdn.com/bphoto/gbbtiCjBVO0fZ-ud50N2Mw/o.jpg',
					is_closed: false,
					phone: '',
					coordinates: [ '29.783702073804072', '-95.39705866438268' ],
					photos: [
						'https://s3-media3.fl.yelpcdn.com/bphoto/gbbtiCjBVO0fZ-ud50N2Mw/o.jpg',
						'https://s3-media1.fl.yelpcdn.com/bphoto/pxl6mIJwC3YpAD5t3OW9Ng/o.jpg',
						'https://s3-media3.fl.yelpcdn.com/bphoto/Vl9d202BlmIiXTH6FbggLA/o.jpg'
					],
					state: 'TX',
					address: '700 Heights BlvdHouston, TX 77007',
					hours: '06:00 - 23:00',
					price: '$$$'
				},
				{
					name: 'OAK Fitness',
					image_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/u3lfMEBTD_u3qxuyCcTfiw/o.jpg',
					is_closed: false,
					phone: '+18325825025',
					coordinates: [ '29.77142', '-95.40814' ],
					photos: [
						'https://s3-media1.fl.yelpcdn.com/bphoto/u3lfMEBTD_u3qxuyCcTfiw/o.jpg',
						'https://s3-media1.fl.yelpcdn.com/bphoto/V8PfpLZxDXqujH_iMzR2yw/o.jpg',
						'https://s3-media4.fl.yelpcdn.com/bphoto/GHQCX5Q3HZu8I7hr3VFHmg/o.jpg'
					],
					hours: '06:00 - 23:00',
					state: 'TX',
					address: '4620 Center StHouston, TX 77007',
					price: '$$$'
				},
				{
					name: 'Love Dance HTX',
					image_url: 'https://s3-media3.fl.yelpcdn.com/bphoto/XzHqh35kkM5Y1dh72psHlA/o.jpg',
					is_closed: false,
					phone: '+18327811735',
					coordinates: [ '29.7713771118634', '-95.3809114619713' ],
					photos: [
						'https://s3-media3.fl.yelpcdn.com/bphoto/XzHqh35kkM5Y1dh72psHlA/o.jpg',
						'https://s3-media1.fl.yelpcdn.com/bphoto/FNEuQmgUK-knW78dvUQXIQ/o.jpg',
						'https://s3-media2.fl.yelpcdn.com/bphoto/gT4G1h9hJyGA6piaD_I0oA/o.jpg'
					],
					hours: '06:00 - 23:00',
					state: 'TX',
					address: '2206 Edwards StSte BHouston, TX 77007',
					price: '$$$'
				},
				{
					name: 'The Dance Whisperer',
					image_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/98eEN_s_AAebKL2h8Zf0yw/o.jpg',
					is_closed: false,
					phone: '+18324294477',
					coordinates: [ '29.73118019104', '-95.4563751220703' ],
					photos: [
						'https://s3-media1.fl.yelpcdn.com/bphoto/98eEN_s_AAebKL2h8Zf0yw/o.jpg',
						'https://s3-media1.fl.yelpcdn.com/bphoto/qZ3Xmf_6D9pZdF_TCmyFMA/o.jpg',
						'https://s3-media1.fl.yelpcdn.com/bphoto/K5LRw0AQxZysQSVTEdx71A/o.jpg'
					],
					hours: '06:00 - 23:00',
					state: 'TX',
					address: '4710 Merwin StHouston, TX 77027',
					price: '$$$'
				}
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Businesses', null, {});
	},
};
