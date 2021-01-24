import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

export const link = createHttpLink({
	uri: process.env.REACT_APP_API,
	credentials: 'same-origin',
});

const client = new ApolloClient({
	uri: 'https://48p1r2roz4.sse.codesandbox.io',
	cache: new InMemoryCache(),
});

export default client;
