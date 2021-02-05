import { AlbumTrack } from './Album';
import { Image } from './Image';
import { Search } from './Search';
import { Tag, TopTag } from './Tag';

export interface Track {
	name: string;
	mbid: string;
	url: string;
	duration: string;
	streamable: {
		'#text': string;
		fulltrack: string;
	};
	listeners: string;
	playcount: string;
	artist: {
		name: string;
		mbid: string;
		url: string;
	};
	album: AlbumTrack;
	toptags: {
		tag: Tag[];
	};
	wiki: TrackWiki;
}

export interface TrackArtist {
	name: string;
	playcount: string;
	listeners: string;
	mbid: string;
	url: string;
	streamable: string;
	artist: {
		name: string;
		mbid: string;
		url: string;
	};
	image: Image[];
}

export interface TrackAlbum {
	name: string;
	url: string;
	duration: string;
	'@attr': {
		rank: string;
	};
	streamable: {
		'#text': string;
		fulltrack: string;
	};
	artist: {
		name: string;
		mbid: string;
		url: string;
	};
}

export interface TrackTag {
	name: string;
	duration: string;
	mbid: string;
	url: string;
	streamable: {
		'#text': string;
		fulltrack: string;
	};
	artist: {
		name: string;
		mbid: string;
		url: string;
	};
	image: Image[];
	'@attr': {
		rank: string;
	};
}

export interface TrackChart {
	name: string;
	duration: string;
	playcount: string;
	listeners: string;
	mbid: string;
	url: string;
	streamable: {
		'#text': string;
		fulltrack: string;
	};
	artist: {
		name: string;
		mbid: string;
		url: string;
	};
	image: Image[];
}

export interface TrackSimilar {
	name: string;
	playcount: string;
	mbid: string;
	match: number;
	url: string;
	streamable: {
		'#text': string;
		fulltrack: string;
	};
	duration: number;
	artist: {
		name: string;
		mbid: string;
		url: string;
	};
	image: Image[];
}

export interface TrackSimplified {
	name: string;
	artist: string;
	url: string;
	mbid: string;
	streamable: string;
	listeners: string;
	image: Image[];
}

export interface TrackWiki {
	published: string;
	summary: string;
	content: string;
}

export interface TrackSearch extends Search {
	trackmatches: {
		track: TrackSimplified[];
	};
}

export interface TrackDetails {
	track: Track;
}

export interface TrackTopTags {
	toptags: {
		tag: TopTag[];
		'@attr': {
			artist: string;
			track: string;
		};
	};
}

export interface SimilarTracks {
	similartracks: {
		track: TrackSimilar[];
		'@attr': {
			artist: string;
		};
	};
}
