import md5 from 'md5';
import React from 'react';

export interface HomePageProps {}

const HomePage: React.SFC<HomePageProps> = () => {
	interface MethodProps {
		method: string;
		track?: string;
		artist?: string;
		album?: string;
	}
	const getApiSignature = ({ method }: MethodProps) => {
		let sessionKey = localStorage.getItem('key'),
			apiKey = process.env.REACT_APP_LAST_FM_API_KEY,
			secretKey = process.env.REACT_APP_LAST_FM_SHARED_SECRET;
		const params = {
			method,
			api_key: apiKey,
			sk: sessionKey,
		};

		let string = [];
		for (let [key, value] of Object.entries(params)) {
			const pair = `${key}${value}`;
			string.push(pair);
		}
		string.toString().split(',').join('');
		const apiSig = md5(`${string}${secretKey}`);
		return apiSig;
	};
	getApiSignature({ method: 'track.love' });

	return <div>home page</div>;
};

export default HomePage;
