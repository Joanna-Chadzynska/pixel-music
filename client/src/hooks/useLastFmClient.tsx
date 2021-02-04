import React, { useContext } from 'react';
import { LastFMClient } from './../providers/LastFmClient';

const LastFMClientContext = React.createContext(
	new LastFMClient('http://ws.audioscrobbler.com/2.0/')
);

LastFMClientContext.displayName = 'LastFMClient';

export const useLastFMClient = (): LastFMClient => {
	const clientInstance = useContext(LastFMClientContext);
	return clientInstance;
};
