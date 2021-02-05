export const COMMON_PARAMS = {
	api_key: process.env.REACT_APP_LAST_FM_API_KEY,
	format: 'json',
};

export const SERVICES = {
	album: {
		id: 'album',
		methods: {
			search: {
				method: 'album.search',
				params: {
					album: 'album', // required
					limit: 'limit',
					page: 'page',
				},
			},
			getInfo: {
				method: 'album.getinfo',
				params: {
					artist: 'artist', // required
					album: 'album', // required
					mbid: 'mbid', // musicbrainz id of the album
					lang: 'lang', // language of returned bio
					autocorrect: 'autocorrect[0|1]', // Transform misspelled artist names into correct artist names, returning the correct version instead. The corrected artist name will be returned in the response.
				},
			},
			getTopTags: {
				method: 'album.gettoptags',
				params: {
					artist: 'artist', // required
					album: 'album', // required
					mbid: 'mbid',
					autocorrect: 'autocorrect[0|1]',
				},
			},
		},
	},
	artist: {
		id: 'artist',
		methods: {
			search: {
				method: 'artist.search',
				params: {
					artist: 'artist',
					limit: 'limit',
					page: 'page',
				},
			},
			getInfo: {
				method: 'artist.getinfo',
				params: {
					artist: 'artist', // required
					mbid: 'mbid',
					lang: 'lang',
					autocorrect: 'autocorrect[0|1]',
				},
			},
			getSimilar: {
				method: 'artist.getsimilar',
				params: {
					artist: 'artist', // required
					mbid: 'mbid',
					autocorrect: 'autocorrect[0|1]',
					limit: 'limit',
				},
			},
			getTopAlbums: {
				method: 'artist.gettopalbums',
				params: {
					artist: 'artist', //required
					mbid: 'mbid',
					autocorrect: 'autocorrect[0|1]',
					limit: 'limit',
					page: 'page',
				},
			},
			getTopTracks: {
				method: 'artist.gettoptracks',
				params: {
					artist: 'artist', //required
					mbid: 'mbid',
					autocorrect: 'autocorrect[0|1]',
					limit: 'limit',
					page: 'page',
				},
			},
			getTopTags: {
				method: 'artist.gettoptags',
				params: {
					artist: 'artist', // required
					mbid: 'mbid',
					autocorrect: 'autocorrect[0|1]',
				},
			},
		},
	},
	track: {
		id: 'track',
		methods: {
			search: {
				method: 'track.search',
				params: {
					track: 'track', // required
					artist: 'artist',
					limit: 'limit',
					page: 'page',
				},
			},
			getInfo: {
				method: 'track.getinfo',
				params: {
					track: 'track', // required
					artist: 'artist', // required
					mbid: 'mbid',
					autocorrect: 'autocorrect[0|1]',
				},
			},
			getSimilar: {
				method: 'track.getsimilar',
				params: {
					track: 'track', // required
					artist: 'artist', // required
					mbid: 'mbid',
					autocorrect: 'autocorrect[0|1]',
					limit: 'limit',
				},
			},
			getTopTags: {
				method: 'track.gettoptags',
				params: {
					track: 'track', // required
					artist: 'artist', // required
					mbid: 'mbid',
					autocorrect: 'autocorrect[0|1]',
				},
			},
		},
	},
	tag: {
		id: 'tag',
		methods: {
			getInfo: {
				method: 'tag.getinfo',
				params: {
					tag: 'tag', // required,
					lang: 'lang',
				},
			},
			getSimilar: {
				method: 'tag.getsimilar',
				params: {
					tag: 'tag',
				},
			},
			getTopAlbums: {
				method: 'tag.gettopalbums',
				params: {
					tag: 'tag', // required,
					limit: 'limit',
					page: 'page',
				},
			},
			getTopArtists: {
				method: 'tag.gettopartists',
				params: {
					tag: 'tag', // required,
					limit: 'limit',
					page: 'page',
				},
			},
			getTopTags: {
				method: 'tag.getTopTags',
			},
			getTopTracks: {
				method: 'tag.gettoptracks',
				params: {
					tag: 'tag', // required,
					limit: 'limit',
					page: 'page',
				},
			},
			getWeeklyChartList: {
				method: 'tag.getweeklychartlist',
				params: {
					tag: 'tag',
				},
			},
		},
	},
	chart: {
		id: 'chart',
		methods: {
			getTopArtists: {
				method: 'chart.gettopartists',
				params: {
					page: 'page',
					limit: 'limit',
				},
			},
			getTopTags: {
				method: 'chart.gettoptags',
				params: {
					page: 'page',
					limit: 'limit',
				},
			},
			getTopTracks: {
				method: 'chart.gettoptracks',
				params: {
					page: 'page',
					limit: 'limit',
				},
			},
		},
	},
};
