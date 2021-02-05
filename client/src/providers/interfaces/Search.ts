export interface Query {
	'#text': string;
	searchTerms: string;
	startPage: string;
}

export interface Search {
	'opensearch:Query': Query;
	'opensearch:itemsPerPage': string;
	'opensearch:startIndex': string;
	'opensearch:totalResults': string;
}

export interface SearchResults<T> {
	results: T;
}
