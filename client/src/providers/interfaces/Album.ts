import { Image } from './Image';

export interface Album {
	artist: string;
	image: Image[];
	mbid: string;
	name: string;
	streamable: string;
	url: string;
}
