import { ApolloProvider } from '@apollo/client';
import React from 'react';
import { CookiesProvider } from 'react-cookie';
import ReactDOM from 'react-dom';
import client from './apollo/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
	<React.StrictMode>
		<CookiesProvider>
			<ApolloProvider client={client}>
				<App />
			</ApolloProvider>
		</CookiesProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
