import React, { createContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Browse, Home, SignIn, Token } from './pages';

export const AuthContext: any = createContext('');

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route path='/token'>
					<Token />
				</Route>
				<Route path='/signin'>
					<SignIn />
				</Route>
				<Route path='/browse'>
					<Browse />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
