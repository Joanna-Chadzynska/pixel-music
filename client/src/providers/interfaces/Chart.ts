import { ArtistChart } from './Artist';
import { TagChart } from './Tag';
import { TrackChart } from './Track';

export interface ChartTag {
	'#text': string;
	from: string;
	to: string;
}

export interface ChartTopArtists {
	artists: {
		artist: ArtistChart[];
		'@attr': {
			page: string;
			perPage: string;
			totalPages: string;
			total: string;
		};
	};
}

export interface ChartTopTags {
	tags: {
		tag: TagChart[];
		'@attr': {
			page: string;
			perPage: string;
			totalPages: string;
			total: string;
		};
	};
}

export interface ChartTopTracks {
	tracks: {
		track: TrackChart[];
		'@attr': {
			page: string;
			perPage: string;
			totalPages: string;
			total: string;
		};
	};
}
