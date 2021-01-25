import { Album } from './Album';

export interface Query {
	'#text': string;
	searchTerm: string;
	startPage: string;
}

export interface Search {
	'opensearch:Query': Query;
	'opensearch:itemsPerPage': string;
	'opensearch:startIndex': string;
	'opensearch:totalResults': string;
}

export interface AlbumsSearch extends Search {
	albummatches: {
		album: Album[];
	};
}

export interface SearchResults<T> {
	results: T;
}
