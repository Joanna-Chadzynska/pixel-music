import axios from 'axios';

export const request = axios.create({
	baseURL: 'http://ws.audioscrobbler.com/2.0/',
	withCredentials: true,
});
