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
		let token = localStorage.getItem('token');

		let appSignature = md5(
			`api_key${process.env.REACT_APP_LAST_FM_API_KEY}methodauth.getSessiontoken${token}${process.env.REACT_APP_LAST_FM_SHARED_SECRET}`
		);

		const url = `http://ws.audioscrobbler.com/2.0/?method=auth.getSession&token=${token}&api_key=${process.env.REACT_APP_LAST_FM_API_KEY}&api_sig=${appSignature}&format=json`;
		const response = await axios.get(url);
		localStorage.setItem('url', url);
		localStorage.setItem('name', response.data.session.name);
		localStorage.setItem('key', response.data.session.key);
		window.location.href = '/';
	})();

	return <div />;
};

export default Token;
