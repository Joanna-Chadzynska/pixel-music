import axios from 'axios';
import md5 from 'md5/md5';
import React from 'react';
import { useLocation } from 'react-router-dom';

export interface HomePageProps {}

const Token: React.SFC<HomePageProps> = () => {
	let location = useLocation();
	let path = location.search.split('=');

	(async function getSession() {
		localStorage.setItem('token', path[1]);
		let token = localStorage.getItem('token'),
			apiKey = process.env.REACT_APP_LAST_FM_API_KEY,
			secretKey = process.env.REACT_APP_LAST_FM_SHARED_SECRET;

		let appSignature = md5(
			`api_key${apiKey}methodauth.getSessiontoken${token}${secretKey}`
		);

		const params = {
			token: token,
			api_key: apiKey,
			api_sig: appSignature,
			format: 'json',
		};

		const url = `http://ws.audioscrobbler.com/2.0/?method=auth.getSession&token=${token}&api_key=${apiKey}&api_sig=${appSignature}&format=json`;

		const response = await axios.get(
			'http://ws.audioscrobbler.com/2.0/?method=auth.getSession',
			{
				params,
			}
		);
		localStorage.setItem('url', url);
		localStorage.setItem('name', response.data.session.name);
		localStorage.setItem('key', response.data.session.key);
		window.location.href = '/';
	})();

	return <div />;
};

export default Token;
