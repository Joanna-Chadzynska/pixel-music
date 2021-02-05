import { AlbumTag } from './Album';
import { ArtistTag } from './Artist';
import { ChartTag } from './Chart';
import { TrackTag } from './Track';
export interface Tag {
	name: string;
	url: string;
}

export interface TopTag extends Tag {
	count: number;
}

export interface TagBest {
	name: string;
	count: number;
	reach: number;
}

export interface TagWiki {
	summary: string;
	content: string;
}

export interface TagChart {
	name: string;
	url: string;
	reach: string;
	taggins: string;
	streamable: string;
	wiki: TagWiki;
}

export interface TagDetails {
	tag: {
		name: string;
		total: number;
		reach: number;
		wiki: TagWiki;
	};
}

export interface TagTopAlbums {
	albums: {
		album: AlbumTag[];
		'@attr': {
			tag: string;
			page: string;
			perPage: string;
			totalPages: string;
			total: string;
		};
	};
}

export interface TagTopArtists {
	topartists: {
		artist: ArtistTag[];
		'@attr': {
			tag: string;
			page: string;
			perPage: string;
			totalPages: string;
			total: string;
		};
	};
}

export interface TagTopTracks {
	tracks: {
		track: TrackTag[];
		'@attr': {
			tag: string;
			page: string;
			perPage: string;
			totalPages: string;
			total: string;
		};
	};
}

export interface TagTopTags {
	toptags: {
		'@attr': {
			offset: number;
			num_res: number;
			total: number;
		};
		tag: TagBest[];
	};
}

export interface WeeklyChartList {
	weeklychartlist: {
		chart: ChartTag[];
		'@attr': {
			tag: string;
		};
	};
}
