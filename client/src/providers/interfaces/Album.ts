import { Image } from './Image';
import { Search } from './Search';
import { Tag, TopTag } from './Tag';
import { TrackAlbum } from './Track';

export interface Album {
	name: string;
	artist: string;
	mbid: string;
	url: string;
	image: Image[];
	listeners: string;
	playcount: string;
	tracks: {
		track: TrackAlbum[];
	};
	tags: {
		tag: Tag[];
	};
}

export interface AlbumSimplified {
	name: string;
	artist: string;
	url: string;
	image: Image[];
	mbid: string;
	streamable: string;
}

export interface AlbumArtist {
	name: string;
	playcount: number;
	mbid: string;
	url: string;
	artist: {
		name: string;
		mbid: string;
		url: string;
	};
	image: Image[];
}

export interface AlbumTrack {
	artist: string;
	title: string;
	mbid: string;
	url: string;
	image: Image[];
	'@attr': {
		position: string;
	};
}

export interface AlbumTag {
	name: string;
	mbid: string;
	url: string;
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

export interface AlbumsSearch extends Search {
	albummatches: {
		album: AlbumSimplified[];
	};
}

export interface AlbumDetails {
	album: Album;
}

export interface AlbumTopTags {
	toptags: {
		tag: TopTag[];
		'@attr': {
			artist: string;
			album: string;
		};
	};
}
