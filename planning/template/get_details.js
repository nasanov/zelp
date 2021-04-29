// 'use strict';

// const yelp = require('yelp-fusion');

// const apiKey =
// 	'9G0GMPxGe0300Qdg9GuM_j1ZWRhrf-5rFT46OAu5Plnx-WuHgWLS9AMDTWJ-WNG1Wgwrqpk3253y6Mdn8P9WUYYpO55Om-pLtbbNNLTZXxxEFvT_Uc2P5L-9y0aDYHYx';

// const searchRequest = {
// 	location: 'Houston,san francisco',
// 	categories: 'active',
// };

// const client = yelp.client(apiKey);

// client
// 	.search(searchRequest)
// 	.then(response => {
// 		const firstResult = response.jsonBody.businesses[0];
// 		const prettyJson = JSON.stringify(firstResult, null, 4);
// 		console.log(prettyJson);
// 	})
// 	.catch(e => {
// 		console.log(e);
// 	});

let houston_id = [
	'rgQuVCBPP4CAs7jVaqMEXA',
	'lZhZdX2FmkltFawiIx-RmQ',
	'-7AUbCE0pqu-UqAe-gTBgA',
	'wiiin8DmKYZbgz6YKnus3A',
	'aeILFXnCCL4frEuXEXqWeQ',
	'HEbM4oQAMZMFv0HF4aIGgA',
	'pxeRqY438fOcEJmw9ceAug',
	'BkGi_-PZT3ETAjZCLIGEyg',
	'1zqLiTmooyoHW1m67V49tw',
	'eam4KDSNO_vYALovwVfd1g',
	'6fwTMAvjGzkKailfE5qWZw',
	'DamV8BXrQpll5RhrS0XaRA',
	'P0nmUMn7HBR80W0vsZODTw',
	'k6f7gku48RiGlHGYmPL1_Q',
	'c3T84QlWUFcTY05woBk8SQ',
	'3FUSbgrdpoMv5nVz5nz1uA',
	'Qw6RhIA8In1zIGkXxeogNA',
	'5iqpAN44IX4QHMPorN6-Vw',
	'G27T0OvfmY-f9MppWOmcwg',
	'PijaG7EmT7wcySPvzecIlA',
	'E4D2RhRDFIr2K57swLgenA',
	'H1pkqARYwIgKIQUFBzY7uA',
	'czL_heq9lxpZifolMk47Kg',
	'yibrSrJDJfIfEFIXndfPKw',
	'zG_6os0fzSVjbHbKBZX7Tg',
	'eN-AttmI6MbjIbC0GabKNA',
	'5uZThcFfaadyiA-nXpto1Q',
	'YfkJ9BrXAhN5F-idw1jQhg',
	'cKScrIpj4PU-8X0aXAvDVg',
	'AM8WEyvAkmPSkuGBxI-Scw',
	'VmPPVOg6oYJTtOOnP0rkjQ',
	'_Eo2oH-XzihwPHRoFLvfvg',
	'ocVcptKg96JQNan24XV4Fw',
	'htfLHF_BrjzlS7jXtc-U6A',
	'rmGrOzO-mgRcgRRaqQOlGw',
	'3v--HB66Te8QCrv66lvUXg',
	'h_1Uoo8m5H8z0yApcngEcw',
	'a7uImt6i6v3BGb3HGWamdw',
	'LpAR5KhQ3syPqfkeuq1Msg',
	'JE3J9l0m7JT_IwT7iuBxfw',
	'5U2cykX012lXDSiuPOT3iQ',
	'juEqm-0uxScp1C7ZKT-mxg',
	'kxUz0g0hKrY-XFi-qPsUqw',
	'SXHdQHjVVJHPqsqAi48N0A',
	'9Eiil0ooB2WYgfm7nxXEag',
	'GsIr7nVL3Xwb_P1Oge5VrA',
	'dUKloU2vSak7nRQkV0wEcA',
	'ze6Q-KpwHYsBpH4sgU23og',
	'-W3ye7IFJSoqoXmSmny6zg',
	'9I1uqLSHEXvwWUce18UTcw',
];

let austin_id = [
	'_S-M-4ak-Osu2Q1Q-pPAYQ',
	'nljMBLZnkiBh1NUQbivoew',
	'8ygBj0DQu5U_lIOc0iUUEQ',
	'v94kNW102RMdpdkoSt55Lg',
	'05vxmc97D-W3S58Ipv7EPA',
	'Go1IgILuOIJc_3LGZi8NkA',
	'pvwGs_-m8qKheCMkLvc8rQ',
	'6XXTB2lGw8FICjmGbd6m5g',
	'htg3YbExMUWF9kcqNbVFMQ',
	'x4UyBHg73lvpAgD_8vW3hg',
	'4wRdoVx6KuZd2S4OZs4yJw',
	'FoIGEXfZ7I4XmG1mVA_xwA',
	'nqe5z9H_8tKV5ETNGjMQug',
	'JYLVkLzvwQfWhEUd0d7mqw',
	'I_ahD8eAsSUv2I6gO3l1fA',
	'yzf_33N7N02QRtxahqXi6w',
	'qtTyFSII4J1sGZ03iywxoA',
	'p1X3JAZM25nUNXNahfQv6Q',
	'ceD_H21rhWixxulkK9Y5fQ',
	'1oONbkQVH72AmAUtt9MD-Q',
	'hGHUk-s27KdVroTJNeW32Q',
	'jZayr5N3o7dIhea8ilnb2g',
	'w_QxwYkmq9X59ueI7EHE0w',
	'88kosdu9NbLZnHrioyPSGg',
	'PviU9z256tcwAQl703MHfg',
	'mSLC-dwWQvxW68eYS9HtjA',
	'CpEkNq0Ek-mtCW0tTRyfsQ',
	'kLybz7QyQQkayOlErZuY_Q',
	'wfKxBxJ8RFZj8jOB6Lpn-Q',
	'EcLg3wpkaK4UhrUcr3V2DQ',
	'1JZdtKTT9LIv2WWk6e7R-A',
	'BE4nLrG_7Irit2CCThi4tg',
	'ImySsV6URMl8u3xTSrl1zA',
	'3PmBH9aRAIR34YV1KbL20Q',
	'jiWtJWoxEfjgokbOJo50nA',
	'0rpomCV5oed91SGMMsXslA',
	'9g_mBYZ_UjG9ttLu8-pPKA',
	'jUcwnPiSENIBqt7Yw87_Zw',
	'wVbcpNgiW0V15qzQostUnQ',
	'NutUWY-T_a_s58uBi35pEg',
	'd7-mncVCkSrltQTT0jsNKg',
	'GtNxs5K0m9tItxjPkQikzg',
	'GulmpIWYtff1oGw4b7cIRg',
	'FGgmFxcddTGkjQdqtYCSDw',
	'aiY3aq45wAr6BePEmlyIDw',
	'CrfFjoS7JC-yKPHzlRe_fA',
	'XuqE2VNDX0RLSGxYeHIBPw',
	'72AIVKhZ90k9bfI_q9A9_A',
	'nafNG3Bn-_dx-8oYDd-8wQ',
	'lFo01fuh61atfM7lKEmjhA',
];

API_KEY =
	'9G0GMPxGe0300Qdg9GuM_j1ZWRhrf-5rFT46OAu5Plnx-WuHgWLS9AMDTWJ-WNG1Wgwrqpk3253y6Mdn8P9WUYYpO55Om-pLtbbNNLTZXxxEFvT_Uc2P5L-9y0aDYHYx';

const fetch = require('node-fetch');
let fs = require("fs");

// function houstonData() {
// 	let businesses = [];

// 	houston_id.forEach(id => {
// 		let res = fetch(`https://api.yelp.com/v3/businesses/${id}`, {
// 			headers: {
// 				Authorization: `Bearer ${API_KEY}`,
// 			},
// 		})
// 			.then(res => res.json())
// 			.then(res => {
// 				console.log(res);
// 				businesses.push(res);
// 			});
// 	});
// 	return businesses;
// }

// houstonData();

let businesses = [];
var i = 0;
function myLoop() {
	setTimeout(function () {
		let res = fetch(`https://api.yelp.com/v3/businesses/${houston_id[i]}`, {
			headers: {
				Authorization: `Bearer ${API_KEY}`,
			},
		})
		.then(res => res.json())
		.then(res => {
			businesses.push(res);
		})
		.then(() => console.log('----', businesses))

		i++;
		if (i < 3) {
			myLoop();
		}
	}, 0);
}

myLoop();


async function getData() {
	const res = await fetch('https://api.yelp.com/v3/businesses/search?location=Houston&categories=active', {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${'9G0GMPxGe0300Qdg9GuM_j1ZWRhrf-5rFT46OAu5Plnx-WuHgWLS9AMDTWJ-WNG1Wgwrqpk3253y6Mdn8P9WUYYpO55Om-pLtbbNNLTZXxxEFvT_Uc2P5L-9y0aDYHYx'}`,
			'Content-type': 'application/json',
		},
	})
	.then(res => res.json())
	// .then(res => console.log(res))
	.then(res => res)
}

let res = getData();
console.log(res);





async function getData(id) {
	try {
		let res = await fetch(`https://api.yelp.com/v3/businesses/${id}`, {
			headers: {
				Authorization: `Bearer ${API_KEY}`,
			},
		})
		const details = await res.json();
		return details;
	} catch (e) {
		console.error(e);
	}
}

async function getDetails() {
	let businesses = [];

	for (let i = 0; i < houston_id.length; i++) {
		const response = await getData(houston_id[i])
		businesses.push(response)
	}

	businesses = JSON.stringify(businesses);
	fs.writeFile('businesses.json', businesses, function (err) {
		if (err) {
			return console.error(err);
		}
		console.log('Data written successfully!');
	});
}

getDetails();
