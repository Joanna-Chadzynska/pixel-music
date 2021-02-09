import { Image } from './Image';

export interface Date {
	uts: string;
	'#text': string;
}

export interface User {
	playlists: string;
	playcount: string;
	gender: string;
	name: string;
	subscriber: string;
	url: string;
	country: string;
	image: Image[];
	registered: {
		unixtime: string;
		'#text': number;
	};
	type: string;
	age: string;
	bootstrap: string;
	realname: string;
}

export interface UserInfo {
	user: User;
}

export interface TrackUserLoved {
	artist: {
		name: string;
		mbid: string;
		url: string;
	};
	mbid: string;
	date: Date;
	url: string;
	image: Image[];
	name: string;
	streamable: {
		'#text': string;
		fulltrack: string;
	};
}

export interface LovedTracks {
	'@attr': {
		page: string;
		perPage: string;
		user: string;
		total: string;
		totalPages: string;
	};
	track: TrackUserLoved[];
}

export interface UserLovedTracks {
	lovedtracks: LovedTracks;
}
