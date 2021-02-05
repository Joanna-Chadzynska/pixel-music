import { AlbumArtist } from './Album';
import { Image } from './Image';
import { Link } from './Link';
import { Search } from './Search';
import { Stats } from './Stats';
import { Tag, TopTag } from './Tag';
import { TrackArtist } from './Track';

export interface Artist {
	name: string;
	mbid: string;
	url: string;
	image: Image[];
	streamable: string;
	ontour: string;
	stats: Stats;
	similar: {
		artist: ArtistSimilarSimplified[];
	};
	tags: {
		tag: Tag[];
	};
}

export interface ArtistSimplified {
	name: string;
	listeners: string;
	mbid: string;
	url: string;
	streamable: string;
	image: Image[];
}

export interface ArtistSimilar {
	name: string;
	mbid: string;
	match: string;
	url: string;
	image: Image[];
	streamable: string;
}

export interface ArtistSimilarSimplified {
	name: string;
	url: string;
	image: Image[];
}

export interface ArtistBio {
	links: {
		link: Link;
	};
	published: string;
	summary: string;
	content: string;
}

export interface ArtistTag {
	name: string;
	mbid: string;
	url: string;
	streamable: string;
	image: Image[];
	'@attr': {
		rank: string;
	};
}

export interface ArtistChart {
	name: string;
	playcount: string;
	listeners: string;
	mbid: string;
	url: string;
	streamable: string;
	image: Image[];
}

export interface ArtistSearch extends Search {
	artistmatches: {
		artist: ArtistSimplified[];
	};
}

export interface ArtistDetails {
	artist: Artist;
}

export interface ArtistTopTags {
	toptags: {
		tag: TopTag[];
	};
	'@attr': {
		artist: string;
	};
}

export interface SimilarArtists {
	similarartists: {
		artist: ArtistSimilar[];
		'@attr': {
			artist: string;
		};
	};
}

export interface ArtistTopAlbums {
	topalbums: {
		album: AlbumArtist[];
		'@attr': {
			artist: string;
			page: string;
			perPage: string;
			totalPages: string;
			total: string;
		};
	};
}

export interface ArtistTopTracks {
	toptracks: {
		track: TrackArtist[];
		'@attr': {
			artist: string;
			page: string;
			perPage: string;
			totalPages: string;
			total: string;
		};
	};
}
