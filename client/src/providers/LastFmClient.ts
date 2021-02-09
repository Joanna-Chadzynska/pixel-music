import axios, { AxiosInstance } from 'axios';
import { AlbumsSearch } from './interfaces/Album';
import { SearchResults } from './interfaces/Search';

export class LastFMClient {
	private readonly ALBUM_ENDPOINT = 'album';
	private readonly ARTIST_ENDPOINT = '/films/';
	private readonly AUTH_ENDPOINT = '/planets/';
	private readonly CHART_ENDPOINT = '/species/';
	private readonly GEO_ENDPOINT = '/starships/';
	private readonly LIBRARY_ENDPOINT = '/vehicles/';
	private readonly TAG_ENDPOINT = '/vehicles/';
	private readonly TRACK_ENDPOINT = '/vehicles/';
	private readonly USER_ENDPOINT = '/vehicles/';

	private readonly request: AxiosInstance;

	public constructor(baseURL: string) {
		this.request = axios.create({ baseURL });
	}

	/**
	 * Method get from API all films from Star Wars Saga
	 * @returns Film[]
	 */
	public async searchAlbums(
		query: string,
		page: number = 1
	): Promise<SearchResults<AlbumsSearch>> {
		return this.searchElements(this.ALBUM_ENDPOINT, query, page);
	}

	/**
	 * Method get from API chunk 10 films from Star Wars Saga
	 * @param chunkNumber number of chunk it contain ie. films from 0-9 for 1 value
	 * @returns Film[]
	 */

	// public async getChunkFilms(chunkNumber = 1): Promise<Film[]> {
	// 	return this.getChunkElements(chunkNumber, this.FILMS_ENDPOINT);
	// }

	// private async getAllElements<T>(endpoint: string): Promise<T[]> {
	// 	// try {
	// 	// 	const data: T[] = [];
	// 	// 	let counter = 1;
	// 	// 	let response: Response<T>;

	// 	// 	do {
	// 	// 		response = (await this.request.get(`${endpoint}?page=${counter++}`))
	// 	// 			.data;
	// 	// 		data.push(...response.results);
	// 	// 	} while (response.next);

	// 	// 	return data;
	// 	// } catch {
	// 	// 	return [];
	// 	// }
	// }

	private async getChunkElements<T>(
		chunkNumber: number,
		endpoint: string
	): Promise<T[]> {
		try {
			const response = (
				await this.request.get(`${endpoint}?page=${chunkNumber}`)
			).data;
			return response;
		} catch (error) {
			return [];
		}
	}

	private async searchElements<T>(
		endpoint: string,
		query: string,
		page?: number
	): Promise<T> {
		try {
			const response = (
				await this.request.get(
					`/?method=${endpoint}.search&${endpoint}=${query}&api_key=${process.env.REACT_APP_LAST_FM_API_KEY}&format=json&page=${page}`,
					{
						headers: { 'Access-Control-Allow-Origin': '*' },
					}
				)
			).data;
			return response;
		} catch (error) {
			return error;
		}
	}

	private async getElementById<T>(
		id: number,
		endpoint: string
	): Promise<T | null> {
		try {
			const response = (await this.request.get(`${endpoint}${id}/`)).data;
			return response;
		} catch (error) {
			return null;
		}
	}
}
